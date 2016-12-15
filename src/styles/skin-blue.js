import tinycolor from 'tinycolor2';

import core from './core';
import {
  navbarVariant,
  logoVariant,
  lightBlue,
  white,
} from './variables';

export default Object.assign({},
  core,
  navbarVariant(lightBlue, white),
  logoVariant(tinycolor(lightBlue).darken(5).toString()),
);
