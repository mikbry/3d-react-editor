import React from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';

const ColorPickerDialog = ({ value, onChange }) => (
  <div style={{ position: 'absolute', zIndex: '2' }}>
    <ChromePicker color={value} onChange={onChange} />
  </div>
);
ColorPickerDialog.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// const ColorPickerDialog = () => <div>ColorPickerDialog</div>;

export default ColorPickerDialog;
