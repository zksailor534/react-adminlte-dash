import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import NavbarLogo from '../components/NavbarLogo';

storiesOf('Logo', module)
  .add('default view', () => (
    <NavbarLogo onClick={action('button clicked')} />
  ))
  .add('light blue', () => (
    <NavbarLogo onClick={action('button clicked')} skin="blue-light" />
  ))
  .add('black', () => (
    <NavbarLogo onClick={action('button clicked')} skin="black" />
  ))
  .add('light black', () => (
    <NavbarLogo onClick={action('button clicked')} skin="black-light" />
  ))
  .add('green', () => (
    <NavbarLogo onClick={action('button clicked')} skin="green" />
  ))
  .add('light green', () => (
    <NavbarLogo onClick={action('button clicked')} skin="green-light" />
  ))
  .add('purple', () => (
    <NavbarLogo onClick={action('button clicked')} skin="purple" />
  ))
  .add('light purple', () => (
    <NavbarLogo onClick={action('button clicked')} skin="purple-light" />
  ))
  .add('red', () => (
    <NavbarLogo onClick={action('button clicked')} skin="red" />
  ))
  .add('light red', () => (
    <NavbarLogo onClick={action('button clicked')} skin="red-light" />
  ))
  .add('yellow', () => (
    <NavbarLogo onClick={action('button clicked')} skin="yellow" />
  ))
  .add('light yellow', () => (
    <NavbarLogo onClick={action('button clicked')} skin="yellow-light" />
  ))
  .add('collapsed sidebar', () => (
    <NavbarLogo onClick={action('button clicked')} sidebarCollapse sidebarMini={false} />
  ))
  .add('collapsed mini sidebar', () => (
    <NavbarLogo onClick={action('button clicked')} sidebarMini sidebarCollapse />
  ));
