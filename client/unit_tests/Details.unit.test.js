import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TheSpace from '../src/TheSpace.jsx';
import InteractionWithGuest from '../src/InteractionWithGuests.jsx';

it('shallow renders theSpace correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<TheSpace ltr={"left-to-right"}/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

it('shallow renders InteractionWithGuest correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<InteractionWithGuest ltr={"testing IWG"}/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

// it('shallow renders guestAccess correctly', () => {
//   const renderer = new ShallowRenderer();
//   renderer.render(<guestAccess ltr={"testing IWG"}/>);
//   const tree = renderer.getRenderOutput();
//   expect(tree).toMatchSnapshot();
// });

// it('shallow renders otherThingsToNote correctly', () => {
//   const renderer = new ShallowRenderer();
//   renderer.render(<otherThingsToNote ltr={"testing IWG"}/>);
//   const tree = renderer.getRenderOutput();
//   expect(tree).toMatchSnapshot();
// });
