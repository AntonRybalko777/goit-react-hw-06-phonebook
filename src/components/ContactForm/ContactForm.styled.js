import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(4)};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
  font-weight: bold;
  padding-bottom: 20px;
  position: relative;
`;

export const StyledField = styled(Field)`
  border: none;
  border-bottom: 1px solid grey;

  &:focus {
    outline: none;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  font-size: ${props => props.theme.spacing(2)};
  color: ${props => props.theme.colors.error};
  position: absolute;
  bottom: 0;
`;

export const Button = styled.button`
  border: 0;
  max-width: 160px;
  border-radius: 5px;
  background: #4676d7;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: 200ms ease-in;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  &:hover,
  :focus {
    background: #739ef5;
  }
`;
