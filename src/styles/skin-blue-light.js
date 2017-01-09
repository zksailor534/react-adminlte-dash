import tinycolor from 'tinycolor2';

import {
  navbarVariant,
  logoVariant,
  sidebarVariant,
  navbarItemVariant,
  lightBlue,
  white,
} from './variables';

export default Object.assign({},
  navbarVariant(lightBlue, white),
  logoVariant(tinycolor(lightBlue).darken(5).toString()),
  sidebarVariant(lightBlue, true),
  navbarItemVariant(lightBlue),
);
