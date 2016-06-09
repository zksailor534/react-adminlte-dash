// name (string) => skin name

const skin = (name) => {
  switch (name) {

    case 'black':
      return {
        navbar: {
          WebkitBoxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
          boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
          backgroundColor: '#ffffff',
          color: '#000000',
        },
      };

    case 'black-light':
      return {
        navbar: {
          WebkitBoxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
          boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
          backgroundColor: '#ffffff',
          color: '#000000',
        },
      };

    case 'blue':
      return {
        navbar: {
          backgroundColor: '#3c8dbc',
        },
      };

    case 'blue-light':
      return {
        navbar: {
          backgroundColor: '#3c8dbc',
        },
      };

    case 'green':
      return {
        navbar: {
          backgroundColor: '#00a65a',
        },
      };

    case 'green-light':
      return {
        navbar: {
          backgroundColor: '#00a65a',
        },
      };

    case 'purple':
      return {
        navbar: {
          backgroundColor: '#605ca8',
        },
      };

    case 'purple-light':
      return {
        navbar: {
          backgroundColor: '#605ca8',
        },
      };

    case 'red':
      return {
        navbar: {
          backgroundColor: '#dd4b39',
        },
      };

    case 'red-light':
      return {
        navbar: {
          backgroundColor: '#dd4b39',
        },
      };

    case 'yellow':
      return {
        navbar: {
          backgroundColor: '#f39c12',
        },
      };

    case 'yellow-light':
      return {
        navbar: {
          backgroundColor: '#f39c12',
        },
      };

    default:
      return {};
  }
};

export default skin;
