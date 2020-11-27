import { THEME_PICKER_TOGGLE } from '../types';

const themePickerToggle = (theme) => {
  return { type: THEME_PICKER_TOGGLE, payload: theme };
};

export default themePickerToggle;
