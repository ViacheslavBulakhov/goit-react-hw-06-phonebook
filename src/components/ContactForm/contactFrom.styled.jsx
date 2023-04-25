import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const Label = styled.label`
  font-size: 25px;
`;
export const RegisterForm = styled(Form)`
  width: 450px;
  height: 200px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 15px;

  & > button {
    border-radius: 4px;
    border: 1px solid #5eff66;

    width: 150px;
    height: 50px;

    font-size: 25px;
    cursor: pointer;
  }
  & > button:hover {
    box-shadow: inset 0px 0px 52px -5px rgba(0, 255, 13, 0.61);
  }
`;
export const Error = styled(ErrorMessage)`
  color: tomato;
  backdrop-filter: sepia(90%);
`;
