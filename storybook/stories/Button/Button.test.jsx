import Button from ".";
import renderer from 'react-test-renderer';

import { MonoText } from '../StyledText';

it(`renders correctly`, () => {
  const tree = renderer.create(<Button>Snapshot test!</Button>).toJSON();

  expect(tree).toMatchSnapshot();
});