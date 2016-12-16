import tinycolor from 'tinycolor2';

import {
  navbarVariant,
  logoVariant,
  sidebarVariant,
  red,
  white,
} from './variables';

export default Object.assign({},
  navbarVariant(red, white),
  logoVariant(tinycolor(red).darken(5).toString()),
  sidebarVariant(red),
);
