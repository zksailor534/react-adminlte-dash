import core from './core';
import {
  navbarVariant,
  red,
  white,
} from './variables';

export default Object.assign({},
  core,
  navbarVariant(red, white),
);
