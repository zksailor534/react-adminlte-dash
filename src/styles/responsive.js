// caller => calling Component
// mobileView (boolean) => size above or below mobile threshold
// sidebarMini (boolean) => uses mini sidebar or collapses sidebar completely

const responsiveStyles = (caller, mobileView, sidebarMini) => {
  switch (caller) {

    // NavBar
    case 'NavBar':
      if (!mobileView) {
        return {};
      } else if (sidebarMini) {
        return {
          marginLeft: '50px'
        };
      } else if (!sidebarMini) {
        return {
          marginLeft: '0px'
        };
      } else {
        return {};
      }

    default:
      return {};
  }
};

export default responsiveStyles;
