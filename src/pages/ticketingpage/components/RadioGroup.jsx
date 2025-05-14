
import React from 'react';
import { RadioButtonGroup, RadioOption, RadioCircle, RadioLabel } from '../styles/formStyles';

const RadioGroup = ({ options, selectedValue, onChange }) => {
  return (
    <RadioButtonGroup>
      {options.map((option) => (
        <RadioOption 
          key={option.value} 
          onClick={() => {
            if (selectedValue === option.value) {
            onChange('');
            } else {
            onChange(option.value);
            }
          }}
        >
          <RadioCircle className={selectedValue === option.value ? 'selected' : ''} />
          <RadioLabel>{option.label}</RadioLabel>
        </RadioOption>
      ))}
    </RadioButtonGroup>
  );
};

export default RadioGroup;