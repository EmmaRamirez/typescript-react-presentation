import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class Presentation extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='presentation'>
        <div className='hello'>Hello!</div>
      </div>
    );
  }
}

const mount = document.createElement('div');

ReactDOM.render(<Presentation />, mount);


// const loadedStates = ['complete', 'loaded', 'interactive'];
//
// if (loadedStates.includes(document.readyState) && document.body) {
//   run();
// } else {
//   window.addEventListener('DOMContentLoaded', run, false);
// }
