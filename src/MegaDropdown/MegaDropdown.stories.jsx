/* eslint-disable import/no-useless-path-segments */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import MegaDropdown from './components/';

const stories = storiesOf('test', module);

stories.addDecorator(withKnobs);

stories.add('Dropdown', () => {
  const isVisible = boolean('Show Menu', false);
  return (
    <MegaDropdown isOpen={isVisible} />
  );
});