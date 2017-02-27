import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import { Presentation } from '../src/index';

describe('Presentation Component', () => {
  it('should mount in a full Dom', () => {
    expect(mount(<Presentation />).find('.presentation').length).toBe(1);
  });
});
