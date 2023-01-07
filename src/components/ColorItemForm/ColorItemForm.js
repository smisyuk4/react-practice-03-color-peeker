import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Form } from './ColorItemForm.styled';

const VALIDATION_SCHEMA = yup
  .object({
    name: yup.string().max(20).required(),
    hex: yup.string().max(10).required(),
    rgba: yup.string().max(20).required(),
  })
  .required();

const DEFAULT_VALUES = {
  name: '',
  hex: '',
  rgba: '',
};

export const ColorItemForm = ({ onSubmitForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(VALIDATION_SCHEMA),
  });

  const onSubmit = data => {
    console.log(data);
    onSubmitForm(data);
    // reset(DEFAULT_VALUES); //можна передати об'єкт з полями для запису в інпути
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <label>
        <input
          {...register('name', { required: true })}
          title="Name"
          placeholder="Name"
        />
        <p>{errors.name?.message}</p>
      </label>

      <label>
        <input
          {...register('hex', { required: true })}
          title="Example - #000000"
          placeholder="#000000"
        />
        <p>{errors.hex?.message}</p>
      </label>

      <label>
        <input
          {...register('rgba', { required: true })}
          title="Example - rgba(0,0,0)"
          placeholder="rgb(0,0,0)"
        />
        <p>{errors.rgba?.message}</p>
      </label>

      <input type="submit" />
    </Form>
  );
};

ColorItemForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
