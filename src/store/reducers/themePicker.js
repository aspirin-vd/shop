import { THEME_PICKER_TOGGLE } from '../types';

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {}

const updateThemePicker = (state, action) => {
  let theme;

  if (state === undefined) {
    theme = localStorage.theme;
    if (theme) return JSON.parse(theme);
    return { isDarkMode: false };
  }

  switch (action.type) {
    case THEME_PICKER_TOGGLE:
      localStorage.setItem('theme', JSON.stringify({ isDarkMode: action.payload }));
      return { isDarkMode: action.payload };

    default:
      return state.themePicker;
  }
};

export default updateThemePicker;
