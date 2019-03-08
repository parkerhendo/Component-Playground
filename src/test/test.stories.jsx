import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

const stories = storiesOf('test', module);

stories.addDecorator(withKnobs);

stories.add('testing...', () => {
  const word = text('World', 'Hello World');
  return (
    <div>
      <h1>{word}</h1>
      <p>red</p>
    </div>
  );
});
