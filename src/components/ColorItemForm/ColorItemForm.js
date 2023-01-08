import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  Form,
  WrapInputs,
  Label,
  Input,
  Error,
  ButtonSend,
} from './ColorItemForm.styled';

const VALIDATION_SCHEMA = yup
  .object({
    name: yup.string().max(20).required(),
    hex: yup.string().max(10).required(),
    rgb: yup.string().max(20).required(),
  })
  .required();

const DEFAULT_VALUES = {
  name: '',
  hex: '',
  rgb: '',
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
      <WrapInputs>
        <Label>
          <Input
            {...register('name', { required: true })}
            title="Name"
            placeholder="Name"
          />
          <Error>{errors.name?.message}</Error>
        </Label>

        <Label>
          <Input
            {...register('hex', { required: true })}
            title="Example - #000000"
            placeholder="#000000"
          />
          <Error>{errors.hex?.message}</Error>
        </Label>

        <Label>
          <Input
            {...register('rgb', { required: true })}
            title="Example - rgb(0,0,0)"
            placeholder="rgb(0,0,0)"
          />
          <Error>{errors.rgb?.message}</Error>
        </Label>
      </WrapInputs>

      <ButtonSend type="submit">Send</ButtonSend>
    </Form>
  );
};

ColorItemForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
