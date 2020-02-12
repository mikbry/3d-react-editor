import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { IconButton } from '@material-ui/core';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import ColorPickerDialog from './ColorPickerDialog';

const InputColorField = ({
  onChange,
  convert,
  name,
  id,
  hintText,
  placeholder,
  floatingLabelText,
  label,
  TextFieldProps,
  value,
  ...props
}) => {
  const [showPicker, setShowPicker] = React.useState(false);
  const [internalValue, setValue] = React.useState(value);
  return (
    <>
      <TextField
        name={name}
        id={id}
        label={floatingLabelText || label}
        placeholder={hintText || placeholder}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        value={internalValue}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...TextFieldProps}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        InputProps={{
          style: { color: value === undefined ? internalValue : value },
          startAdornment: <InputAdornment position="start">#</InputAdornment>,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="color picker" onClick={() => setShowPicker(true)}>
                <PaletteOutlinedIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {showPicker && (
        <ColorPickerDialog
          value={value === undefined ? internalValue : value}
          onClick={() => {
            setShowPicker(false);
            onChange(value);
          }}
          onChange={c => {
            const newValue = c;
            setValue(newValue);
            onChange(newValue);
          }}
        />
      )}
    </>
  );
};

InputColorField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputColorField;
