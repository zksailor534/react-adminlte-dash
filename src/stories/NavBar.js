import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { NavBar } from '../index';

storiesOf('NavBar', module)
  .add('default view', () => (
    <NavBar />
  ))
  .add('light blue', () => (
    <NavBar skin='blue-light' />
  ))
  .add('black', () => (
    <NavBar skin='black' />
  ))
  .add('light black', () => (
    <NavBar skin='black-light' />
  ))
  .add('green', () => (
    <NavBar skin='green' />
  ))
  .add('light green', () => (
    <NavBar skin='green-light' />
  ))
  .add('purple', () => (
    <NavBar skin='purple' />
  ))
  .add('light purple', () => (
    <NavBar skin='purple-light' />
  ))
  .add('red', () => (
    <NavBar skin='red' />
  ))
  .add('light red', () => (
    <NavBar skin='red-light' />
  ))
  .add('yellow', () => (
    <NavBar skin='yellow' />
  ))
  .add('light yellow', () => (
    <NavBar skin='yellow-light' />
  ))
  .add('mini sidebar on mobile', () => (
    <NavBar sidebarMini mobileView />
  ))
  .add('mobile', () => (
    <NavBar sidebarMini={false} mobileView />
  ));
