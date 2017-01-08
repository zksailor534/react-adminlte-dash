import tinycolor from 'tinycolor2';

import {
  navbarVariant,
  logoVariant,
  sidebarVariant,
  navbarItemVariant,
  green,
  white,
} from './variables';

export default Object.assign({},
  navbarVariant(green, white),
  logoVariant(tinycolor(green).darken(5).toString()),
  sidebarVariant(green, true),
  navbarItemVariant(green),
);
