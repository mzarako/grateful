import { renderComponent, expect } from '../test_helper';
import WriteMoment from '../../client/src/components/write-a-moment';

describe('Write a Moment', () => {
  it('has a text area', () => {
    const component = renderComponent(WriteMoment);
    expect(component.find('textarea')).to.exist;
  });
});
