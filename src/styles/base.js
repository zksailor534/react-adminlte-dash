const base = {
  mainHeader: {
    position: 'relative',
    overflow: 'hidden',
    maxHeight: '100px',
    zIndex: '1030',
  },
  navbar: {
    WebkitTransition: 'margin-left 0.3s ease-in-out',
    OTransition: 'margin-left 0.3s ease-in-out',
    transition: 'margin-left 0.3s ease-in-out',
    marginBottom: '0px',
    marginLeft: '230px',
    border: 'none',
    minHeight: '50px',
    borderRadius: '0px',
    color: '#ffffff',
  },
  sidebarToggle: {
    float: 'left',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    margin: '18px',
    ':hover': {
      color: '#ffffff',
    },
  },
};

export default base;
