import tinycolor from 'tinycolor2';

import {
  navbarVariant,
  logoVariant,
  sidebarVariant,
  navbarItemVariant,
  yellow,
  white,
} from './variables';

export default Object.assign({},
  navbarVariant(yellow, white),
  logoVariant(tinycolor(yellow).darken(5).toString()),
  sidebarVariant(yellow),
  navbarItemVariant(yellow),
);
