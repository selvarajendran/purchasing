import React from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';

const options = [
  { value: 'india', label: 'India' },
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' }
];

/* eslint-disable react/jsx-props-no-spreading */
const FormElement = ({ name, control, placeholder, htmlFor, isMandatory, type }) => {
  return (
    <div>
      <div className="label">
        <label htmlFor={name}>{htmlFor + (isMandatory ? '*' : '')}</label>
      </div>
      {type !== 'select' && (
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
      )}{' '}
      {type === 'select' && (
        <Controller
          name="country"
          control={control}
          render={({ field }) => {
            return (
              <Select
                className="select"
                name={name}
                placeholder={placeholder}
                options={options}
                {...field}
              />
            );
          }}
        />
      )}
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

const LoginForm = ({ fields, termsAndCondition, action, buttonText, forgotPassword, signup }) => {
  const history = useHistory();
  const forgotPasswordOnClick = () => {
    history.push('/forgotpassword');
  };
  const signupOnClick = () => {
    history.push('/signup');
  };
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
      <div style={{ width: '426px', display: 'flex' }}>
        {signup && (
          <div
            className="signup"
            onClick={signupOnClick}
            onKeyDown={signupOnClick}
            aria-hidden="true"
          >
            Signup
          </div>
        )}
        {forgotPassword && (
          <div
            className="forgotPassword"
            onClick={forgotPasswordOnClick}
            onKeyDown={forgotPasswordOnClick}
            aria-hidden="true"
          >
            Forgot Password
          </div>
        )}
      </div>
      <button type="submit">{buttonText}</button>
    </form>
  );
};

LoginForm.defaultProps = {
  termsAndCondition: false,
  forgotPassword: false,
  signup: false
};

LoginForm.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.any).isRequired,
  termsAndCondition: PropTypes.bool,
  action: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  forgotPassword: PropTypes.bool,
  signup: PropTypes.bool
};

export default LoginForm;
