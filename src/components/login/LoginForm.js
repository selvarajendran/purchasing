import React from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';

/* eslint-disable react/jsx-props-no-spreading */
const FormElement = ({ name, control, placeholder, htmlFor, isMandatory, type }) => {
  return (
    <div>
      <div className="label">
        <label htmlFor={name}>{htmlFor + (isMandatory ? '*' : '')}</label>
      </div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <input
              className="input"
              type={type}
              name={name}
              control={control}
              placeholder={placeholder}
              {...field}
            />
          );
        }}
      />
    </div>
  );
};

const Terms = ({ register, termText }) => {
  return (
    <div style={{ margin: '14px', display: 'flex' }}>
      <input
        type="checkbox"
        style={{ marginTop: '10px', paddingTop: '5px' }}
        {...register('terms')}
      />
      <span className="term">{termText}</span>
    </div>
  );
};

const LoginForm = ({ fields, termsAndCondition, action, buttonText }) => {
  const defaultValue = {};
  fields.map((item) => {
    defaultValue[item.name] = item.default;
    return null;
  });

  const { register, handleSubmit, control } = useForm({
    defaultValues: defaultValue
  });

  const onSubmit = (data) => {
    action(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((item) => (
        <FormElement
          control={control}
          name={item.name}
          placeholder={item.placeholder}
          htmlFor={item.labelforHtml}
          isMandatory={item.isMandatory}
          type={item.type}
        />
      ))}
      {termsAndCondition && <Terms register={register} termText="I agree to terms & condition" />}
      <button type="submit">{buttonText}</button>
    </form>
  );
};

LoginForm.defaultProps = {
  termsAndCondition: false
};

LoginForm.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.any).isRequired,
  termsAndCondition: PropTypes.bool,
  action: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default LoginForm;
