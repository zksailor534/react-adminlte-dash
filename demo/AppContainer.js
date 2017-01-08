import { connect } from 'react-redux';

import App from './App';

const initialState = {
  theme: 'skin-blue',
};

const themeAction = theme => ({
  type: 'CHANGE_THEME',
  theme,
});

const themeReducer = (state, action) => {
  switch (action.theme) {
    case 'skin-black':
    case 'skin-black-light':
    case 'skin-blue':
    case 'skin-blue-light':
    case 'skin-green':
    case 'skin-green-light':
    case 'skin-purple':
    case 'skin-purple-light':
    case 'skin-red':
    case 'skin-red-light':
    case 'skin-yellow':
    case 'skin-yellow-light':
      return action.theme;
    default:
      return state;
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return Object.assign({}, state, {
        theme: themeReducer(state.theme, action),
      });
    default:
      return state;
  }
};

const mapStateToProps = state => ({
  theme: state.app.theme,
});

const mapDispatchToProps = dispatch => ({
  pickTheme: theme => dispatch(themeAction(theme)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
