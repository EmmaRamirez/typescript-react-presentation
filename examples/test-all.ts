const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const exampleDirs = fs.readdirSync(__dirname).filter((file) => {
  return fs.statSync(path.join(__dirname, file).isDirectory();
});

type cmdArg = {
  cmd: string;
  args: string[];
};

const cmdArgs:cmdArg[] = [
  { cmd: 'npm', args: ['install'] },
  { cmd: 'npm', args: ['test']},
];

for (const dir of exampleDirs) {
  for (const cmdArgs of cmdArgs) {
    const opts = {
      cwd: path.join(__dirname, dir),
      stdio: 'inherit'
    };

    let result = {};
    if (process.platform === 'win32') {
      result = spawnSync(cmdArg.cmd + '.cmd', cmdArg.args, opts);
    } else {
      result = spawnSync(cmdArg.cmd, cmdArg.arts, opts);
    }
    if (result.status !== 0) {
      throw new Error('Building examples exited with non-zero');
    }
  }
}
