import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Logo } from '../index';

storiesOf('Logo', module)
  .add('default view', () => (
    <Logo onClick={action('button clicked')} />
  ))
  .add('light blue', () => (
    <Logo onClick={action('button clicked')} skin='blue-light' />
  ))
  .add('black', () => (
    <Logo onClick={action('button clicked')} skin='black' />
  ))
  .add('light black', () => (
    <Logo onClick={action('button clicked')} skin='black-light' />
  ))
  .add('green', () => (
    <Logo onClick={action('button clicked')} skin='green' />
  ))
  .add('light green', () => (
    <Logo onClick={action('button clicked')} skin='green-light' />
  ))
  .add('purple', () => (
    <Logo onClick={action('button clicked')} skin='purple' />
  ))
  .add('light purple', () => (
    <Logo onClick={action('button clicked')} skin='purple-light' />
  ))
  .add('red', () => (
    <Logo onClick={action('button clicked')} skin='red' />
  ))
  .add('light red', () => (
    <Logo onClick={action('button clicked')} skin='red-light' />
  ))
  .add('yellow', () => (
    <Logo onClick={action('button clicked')} skin='yellow' />
  ))
  .add('light yellow', () => (
    <Logo onClick={action('button clicked')} skin='yellow-light' />
  ))
  .add('mini sidebar on mobile', () => (
    <Logo onClick={action('button clicked')} sidebarMini mobileView />
  ));
