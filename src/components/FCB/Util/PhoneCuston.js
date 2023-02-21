import React from "react"
import { IMaskInput } from "react-imask"
import PropTypes from "prop-types"

const PhoneCuston = React.forwardRef(function PhoneCuston(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(00) 00000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

PhoneCuston.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PhoneCuston;