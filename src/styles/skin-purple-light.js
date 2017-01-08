import tinycolor from 'tinycolor2';

import {
  navbarVariant,
  logoVariant,
  sidebarVariant,
  navbarItemVariant,
  purple,
  white,
} from './variables';

export default Object.assign({},
  navbarVariant(purple, white),
  logoVariant(tinycolor(purple).darken(5).toString()),
  sidebarVariant(purple, true),
  navbarItemVariant(purple),
);
