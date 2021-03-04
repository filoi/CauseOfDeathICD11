import React from "react";
import PropTypes from "prop-types";
import { Button } from "@dhis2/ui";

function ButtonComponent({ onClick , text, className ,disabled}) {
  return (
    <Button
      className={className}
      name="Primary button"
      onClick={() => {
        onClick();
      }}
      primary
      type="button"
      value="default"
      disabled={disabled}
    >
      {text}
    </Button>
  );
}

ButtonComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.text,
  className: PropTypes.text,
  disabled: PropTypes.bool
};

export default ButtonComponent;
