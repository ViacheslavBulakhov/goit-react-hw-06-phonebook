import React from 'react';
import { Formik, Field } from 'formik';
import { RegisterForm, Label, Error } from './contactFrom.styled';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),

  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

export function ContactForm({ addContact }) {
  const handleSubmit = (value, { resetForm }) => {
    addContact({ ...value });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <RegisterForm>
        <Label htmlFor="name">Name</Label>
        <Field id="name" type="text" name="name" />
        <Error name="name" component="span" />

        <Label htmlFor="name">Number</Label>
        <Field type="tel" name="number" />
        <Error name="number" component="span" />

        <button type="submit">Add contact</button>
      </RegisterForm>
    </Formik>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
