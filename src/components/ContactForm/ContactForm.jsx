import { Formik } from 'formik';
import * as Yup from 'yup';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/ContactsSlice';

import {
  StyledField,
  Label,
  StyledForm,
  StyledErrorMessage,
  Button,
} from './ContactForm.styled';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Min length is 2')
    .max(20, 'Max length is 20')
    .required('This field is required'),
  number: Yup.string()
    .required('This field is required')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(7, 'Min length is 7')
    .max(12, 'Max length is 12'),
});

export const ContactForm = ({ checkDuplicate }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          if (checkDuplicate(values.name.trim())) {
            Notiflix.Notify.failure(`${values.name} already in contacts`);
          } else {
            Notiflix.Notify.success(
              `${values.name} successfully added to the contacts!`
            );
            actions.resetForm();
            dispatch(
              addContact({
                name: values.name.trim(),
                number: values.number.trim(),
                id: nanoid(),
              })
            );
          }
        }}
      >
        <StyledForm>
          <Label>
            Name
            <StyledField name="name" />
            <StyledErrorMessage name="name" component="div" />
          </Label>

          <Label>
            Number
            <StyledField type="tel" name="number" />
            <StyledErrorMessage name="number" component="div" />
          </Label>

          <Button type="submit">
            <AiOutlinePlusCircle />
            Add contact
          </Button>
        </StyledForm>
      </Formik>
    </div>
  );
};
