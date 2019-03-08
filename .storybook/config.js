import { configure, addDecorator } from '@storybook/react';

import {withInfo} from "@storybook/addon-info";

const req = require.context('../src/', true, /.stories.jsx$/);

function loadStories() {
  req.keys().sort().forEach(filename => req(filename));
}

addDecorator(withInfo);

configure(loadStories, module);
