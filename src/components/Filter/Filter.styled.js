import styled from 'styled-components';

export const Label = styled.label`
  gap: ${props => props.theme.spacing(2)};
  font-weight: bold;
`;

export const Input = styled.input`
  margin-left: 10px;
  border: none;
  border-bottom: 1px solid grey;

  &:focus {
    outline: none;
  }
`;
