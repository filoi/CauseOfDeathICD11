import React from "react";
import PropTypes from "prop-types";
import { SingleSelect, SingleSelectOption } from "@dhis2/ui";

function DropDown({ data, placeHolder, selectedValue, onChange, className }) {
  return (
    <SingleSelect
      className="select"
      onChange={(payload) => {
        onChange(payload.selected);
      }}
      selected={selectedValue}
      placeholder={placeHolder}
    >
      {data.map((item, i) => (
        <SingleSelectOption label={item.name} value={item.name} className={className} key={i} />
      ))}
    </SingleSelect>
  );
}

DropDown.propTypes = {
  data: PropTypes.array,
  placeHolder: PropTypes.string,
  selectedValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default DropDown;
