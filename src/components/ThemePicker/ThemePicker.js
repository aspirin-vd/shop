import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { themePickerToggle } from '../../store/actions';

import './ThemePicker.scss';

const ThemePicker = ({ isDarkMode, themePickerToggle }) => (
  <>
    <button
      className='theme-picker btn btn-color-reverse position-fixed p-2 rounded-circle'
      data-toggle="collapse"
      data-target="#collapseExample"
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      <i className="fas fa-palette d-flex p-1"/>
    </button>
    <div
      className="theme-picker__popup collapse position-fixed"
      id="collapseExample"
    >
      <div className="card card-body rounded-0">
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            checked={isDarkMode}
            onChange={(e) => themePickerToggle(e.target.checked)}
          />
          <label
            className="custom-control-label"
            htmlFor="customSwitch1"
          >Dark mode</label>
        </div>
      </div>
    </div>
  </>
);

const mapStateToProps = ({ themePicker: { isDarkMode } }) => {
  return { isDarkMode };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    themePickerToggle: themePickerToggle,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemePicker);
