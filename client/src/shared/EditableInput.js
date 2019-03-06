import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

const EditableInputButtons = ({ isEdited, onEdit, onSubmit, onCancel }) => (
  isEdited
    ? (
      <Fragment>
        <Button onClick={onSubmit} bsStyle="link">Save</Button>
        <Button onClick={onCancel} bsStyle="link">Cancel</Button>
      </Fragment>
    )
    : <Button onClick={onEdit} bsStyle="link">Edit</Button>
);


EditableInputButtons.propTypes = {
  isEdited: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};


export const EditableInput = ({ label, value: initialValue, component: Component, ...other }) => {
  const [value, setValue] = useState(initialValue);
  const [isEdited, setMode] = useState(false);

  const handleChange = ({ target: { value: newValue } }) => {
    setValue(newValue);
  };

  const handleEdit = () => {
    setMode(true);
  };

  // TODO: Actually handle submit
  const handleSubmit = () => {
    console.log('Submit', value);
    setMode(false);
  };

  const handleCancel = () => {
    setValue(initialValue);
    setMode(false);
  };

  return (
    <FormGroup>
      <Col componentClass={ControlLabel} lg={3}>
        {label}
      </Col>
      <Col lg={3}>
        { isEdited
          ? (
            <Component
              name={label.toLowerCase()}
              value={value}
              onChange={handleChange}
              {...other}
            />
          )
          : <FormControl.Static>{value}</FormControl.Static> }
      </Col>
      <Col lg={6}>
        <EditableInputButtons
          isEdited={isEdited}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          onEdit={handleEdit}
        />
      </Col>
    </FormGroup>
  );
};

EditableInput.propTypes = {
  component: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
  })).isRequired,
};

// TODO: Move and rename
export const Select = ({ options, ...other }) => (
  <FormControl
    componentClass="select"
    {...other}
  >
    {options.map(op => <option key={op.id} value={op.id}>{op.name}</option>)}
  </FormControl>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};
