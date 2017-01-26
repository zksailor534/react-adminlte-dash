/* eslint-disable import/prefer-default-export */
import tinycolor from 'tinycolor2';

// COLORS
// --------------------------------------------------------
export const baseColor = '#333';
// Primary
export const lightBlue = '#3c8dbc';
// Danger
export const red = '#dd4b39';
// Success
export const green = '#00a65a';
// Info
export const aqua = '#00c0ef';
// Warning
export const yellow = '#f39c12';
export const blue = '#0073b7';
export const navy = '#001f3f';
export const teal = '#39cccc';
export const olive = '#3d9970';
export const lime = '#01ff70';
export const orange = '#ff851b';
export const fuchsia = '#f012be';
export const purple = '#605ca8';
export const maroon = '#d81b60';
export const black = '#111';
export const gray = '#d2d6de';
export const white = '#fff';

// LAYOUT
// --------------------------------------------------------

// BOOTSTRAP
// Screen sizes
// Extra small screen
export const screenXsMin = '500px';
// Small screen / tablet
export const screenSmMin = '768px';
// Medium screen / desktop
export const screenMdMin = '992px';
// Large screen / wide desktop
export const screenLgMin = '1200px';
// So media queries don't overlap when required, provide a maximum
export const screenXsMax = `${parseInt(screenSmMin, 10) - 1}px`;
export const screenSmMax = `${parseInt(screenMdMin, 10) - 1}px`;
export const screenMdMax = `${parseInt(screenLgMin, 10) - 1}px`;
// Boostrap sizing
export const fontFamilyBase = "'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif";
export const fontSizeBase = '14px';
export const lineHeightBase = 1.428571429;
export const fontWeightBase = '400';
export const lineHeightComputed = `${Math.floor(parseInt(fontSizeBase, 10) * lineHeightBase)}px`;
export const gridGutterWidth = '30px';

// Navbar heights
export const navbarHeight = '50px';
export const navbarPaddingHorizontal = `${Math.floor(parseInt(gridGutterWidth, 10) / 2)}px`;
export const navbarPaddingVertical = `${(parseInt(navbarHeight, 10) - parseInt(lineHeightComputed, 10)) / 2}px`;
// Side bar and logo width
export const sidebarWidth = '230px';
export const sidebarMiniWidth = '50px';
// Boxed layout maximum width
export const boxedLayoutMaxWidth = '1024px';
// When the logo should go to the top of the screen
export const screenHeaderCollapse = screenXsMax;

// Link colors (Aka = <a> tags)
export const linkColor = lightBlue;
export const linkHoverColor = tinycolor(linkColor).lighten(15).toString();

// SIDEBAR SKINS
// --------------------------------------------------------

// Dark sidebar
export const sidebarDarkBg = '#222d32';
export const sidebarDarkHoverBg = tinycolor(sidebarDarkBg).darken(2).toString();
export const sidebarDarkColor = tinycolor(sidebarDarkBg).lighten(60).toString();
export const sidebarDarkHoverColor = '#fff';
export const sidebarDarkSubmenuBg = tinycolor(sidebarDarkBg).lighten(5).toString();
export const sidebarDarkSubmenuColor = tinycolor(sidebarDarkSubmenuBg).lighten(40).toString();
export const sidebarDarkSubmenuHoverColor = '#fff';

// Light sidebar
export const sidebarLightBg = '#f9fafc';
export const sidebarLightHoverBg = tinycolor('#f0f0f1').lighten(1.5).toString();
export const sidebarLightColor = '#444';
export const sidebarLightHoverColor = '#000';
export const sidebarLightSubmenuBg = sidebarLightHoverBg;
export const sidebarLightSubmenuColor = '#777';
export const sidebarLightSubmenuHoverColor = '#000';

// CONTROL SIDEBAR
//--------------------------------------------------------
export const controlSidebarWidth = sidebarWidth;

// BOXES
//--------------------------------------------------------
export const boxBorderColor = '#f4f4f4';
export const boxBorderRadius = '3px';
export const boxFooterBg = '#fff';
export const boxBoxshadow = '0 1px 1px rgba(0, 0, 0, .1)';
export const boxPadding = '10px';

// Box variants
export const boxDefaultBorderTopColor = '#d2d6de';

// BUTTONS
//--------------------------------------------------------
export const btnBoxshadow = 'none';

// PROGRESS BARS
//--------------------------------------------------------
export const progressBarBorderRadius = '1px';
export const progressBarSmBorderRadius = '1px';
export const progressBarXsBorderRadius = '1px';

// FORMS
//--------------------------------------------------------
export const inputRadius = '0';

// BUTTONS
//--------------------------------------------------------

// Border radius for non flat buttons
export const btnBorderRadius = '3px';

// DIRECT CHAT
//--------------------------------------------------------
export const directChatHeight = '250px';
export const directChatDefaultMsgBg = gray;
export const directChatDefaultFontColor = '#444';
export const directChatDefaultMsgBorderColor = gray;

// CHAT WIDGET
//--------------------------------------------------------
export const attachmentBorderRadius = '3px';

// TRANSITIONS SETTINGS
//--------------------------------------------------------

// Transition global options
export const transitionSpeed = '.3s';
export const transitionFn = 'ease-in-out';

// MIXINS
//--------------------------------------------------------
export const navbarVariant = (
  color,
  fontColor = 'rgba(255, 255, 255, 0.8)',
  hoverColor = '#f6f6f6',
  hoverBg = 'rgba(0, 0, 0, 0.1)',
) => ({
  backgroundColor: color,
  navbarFontColor: fontColor,
  navbarHoverColor: hoverColor,
  navbarHoverBg: hoverBg,
});

export const logoVariant = (
  bgColor,
  color = '#fff',
  borderBottomColor = 'transparent',
  borderBottomWidth = '0',
) => ({
  logoBgColor: bgColor,
  logoColor: color,
  logoBorderBottom: `${borderBottomWidth} solid ${borderBottomColor}`,
  logoHover: tinycolor(bgColor).darken(1).toString(),
});

export const sidebarVariant = (
  color,
  light = false,
) => (
  (!light) ?
  {
    sidebarBg: sidebarDarkBg,
    userPanelColor: '#fff',
    sidebarHeaderColor: tinycolor(sidebarDarkBg).lighten(20).toString(),
    sidebarHeaderBg: tinycolor(sidebarDarkBg).darken(4).toString(),
    sidebarLinkColor: sidebarDarkColor,
    sidebarLinkBorderLeft: '3px solid transparent',
    sidebarLinkActiveColor: sidebarDarkHoverColor,
    sidebarLinkActiveBg: sidebarDarkHoverBg,
    sidebarLinkActiveBorderLeftColor: color,
    sidebarLinkHoverDec: 'none',
    sidebarSubmenuMargin: '0 1px',
    sidebarSubmenuBg: sidebarDarkSubmenuBg,
    sidebarSubmenuLinkColor: sidebarDarkSubmenuColor,
    sidebarSubmenuLinkHoverColor: sidebarDarkSubmenuHoverColor,
    sidebarFormBorderRadius: '3px',
    sidebarFormBorder: `1px solid ${tinycolor(sidebarDarkBg).lighten(10).toString()}`,
    sidebarFormMargin: '10px 10px',
    sidebarFormInputBoxShadow: 'none',
    sidebarFormInputBg: tinycolor(sidebarDarkBg).lighten(10).toString(),
    sidebarFormInputBorder: '1px solid transparent',
    sidebarFormInputHeight: '35px',
    sidebarFormInputColor: '#666',
    sidebarFormInputBorderRadius: '2px 0 0 2px',
    sidebarFormInputFocusBg: '#fff',
    sidebarFormInputFocusColor: '#666',
    sidebarFormInputFocusBorderLeftColor: '#fff',
    sidebarFormButtonColor: '#999',
    sidebarFormButtonBorderRadius: '0 2px 2px 0',
  } :
  {
    sidebarBg: sidebarLightBg,
    contentLeftBorder: `1px solid ${gray}`,
    footerLeftBorder: `1px solid ${gray}`,
    userPanelColor: sidebarLightColor,
    sidebarHeaderColor: tinycolor(sidebarLightColor).lighten(25).toString(),
    sidebarHeaderBg: sidebarLightBg,
    sidebarLinkColor: sidebarLightColor,
    sidebarLinkTransition: 'border-left-color .3s ease',
    sidebarLinkBorderLeft: '3px solid transparent',
    sidebarLinkFontWeight: '600',
    sidebarLinkActiveColor: sidebarLightHoverColor,
    sidebarLinkActiveBg: sidebarLightHoverBg,
    sidebarLinkActiveBorderLeftColor: color,
    sidebarLinkActiveFontWeight: '600',
    sidebarLinkHoverDec: 'none',
    sidebarSubmenuBg: sidebarLightSubmenuBg,
    sidebarFormBorderRadius: '3px',
    sidebarFormBorder: `1px solid ${gray}`,
    sidebarFormMargin: '10px 10px',
    sidebarFormInputBoxShadow: 'none',
    sidebarFormInputBg: '#fff',
    sidebarFormInputBorder: '1px solid transparent',
    sidebarFormInputHeight: '35px',
    sidebarFormInputColor: '#666',
    sidebarFormInputBorderRadius: '2px 0 2px 0',
    sidebarFormInputFocusBg: '#fff',
    sidebarFormInputFocusColor: '#666',
    sidebarFormInputFocusBorderLeftColor: '#fff',
    sidebarFormButtonColor: '#999',
    sidebarFormButtonBorderRadius: '0 2px 0 2px',
    sidebarSubmenuLgBorderLeft: `1px solid ${gray}`,
  }
);

export const navbarItemVariant = (
  color,
  dividerColor = 'rgba(255, 255, 255, 0.1)',
  itemLinkColor = '#fff',
) => ({
  navbarItemDividerBg: dividerColor,
  navbarItemLinkColor: itemLinkColor,
  navbarItemLinkHoverBg: tinycolor(color).darken(5).toString(),
});
