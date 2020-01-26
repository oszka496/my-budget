import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, makeStyles } from '@material-ui/core';

const EditableInputButtons = ({ isEdited, onEdit, onSubmit, onCancel }) => (
  isEdited
    ? (
      <>
        <Button onClick={onSubmit}>Save</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </>
    )
    : <Button onClick={onEdit}>Edit</Button>
);


EditableInputButtons.propTypes = {
  isEdited: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

const useStyles = makeStyles({ root: { display: 'flex', alignItems: 'baseline ' } });


export const EditableInput = ({ label, value: initialValue, component: Component, onSubmit, ...other }) => {
  const [value, setValue] = useState(initialValue);
  const [isEdited, setMode] = useState(false);

  const handleChange = ({ target: { value: newValue } }) => {
    setValue(newValue);
  };

  const handleEdit = () => {
    setMode(true);
  };

  const handleSubmit = () => {
    onSubmit(value);
    setMode(false);
  };

  const handleCancel = () => {
    setValue(initialValue);
    setMode(false);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Component
        label={label.toLowerCase()}
        value={value}
        onChange={handleChange}
        disabled={!isEdited}
        {...other}
      />
      <EditableInputButtons
        isEdited={isEdited}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        onEdit={handleEdit}
      />
    </div>
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
  onSubmit: PropTypes.func.isRequired,
};
