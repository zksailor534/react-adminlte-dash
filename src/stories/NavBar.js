import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Navbar from '../components/Navbar';

storiesOf('NavBar', module)
  .add('default view', () => (
    <Navbar sidebarToggle={action('toggle clicked')} />
  ))
  .add('light blue', () => (
    <Navbar sidebarToggle={action('toggle clicked')} skin="blue-light" />
  ))
  .add('black', () => (
    <Navbar sidebarToggle={action('toggle clicked')} skin="black" />
  ))
  .add('light black', () => (
    <Navbar sidebarToggle={action('toggle clicked')} skin="black-light" />
  ))
  .add('green', () => (
    <Navbar sidebarToggle={action('toggle clicked')} skin="green" />
  ))
  .add('light green', () => (
    <Navbar sidebarToggle={action('toggle clicked')} skin="green-light" />
  ))
  .add('purple', () => (
    <Navbar sidebarToggle={action('toggle clicked')} skin="purple" />
  ))
  .add('light purple', () => (
    <Navbar sidebarToggle={action('toggle clicked')} skin="purple-light" />
  ))
  .add('red', () => (
    <Navbar sidebarToggle={action('toggle clicked')} skin="red" />
  ))
  .add('light red', () => (
    <Navbar sidebarToggle={action('toggle clicked')} skin="red-light" />
  ))
  .add('yellow', () => (
    <Navbar sidebarToggle={action('toggle clicked')} skin="yellow" />
  ))
  .add('light yellow', () => (
    <Navbar sidebarToggle={action('toggle clicked')} skin="yellow-light" />
  ))
  .add('collapsed sidebar', () => (
    <Navbar sidebarToggle={action('toggle clicked')} sidebarCollapse sidebarMini={false} />
  ))
  .add('collapsed mini sidebar', () => (
    <Navbar sidebarToggle={action('toggle clicked')} sidebarCollapse sidebarMini />
  ));
