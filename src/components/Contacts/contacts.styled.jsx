import styled from 'styled-components';

export const ContactElement = styled.li`
  display: flex;
  align-content: center;
  margin-bottom: 10px;

  & > span {
    font-weight: 600;
    font-size: 25px;
    margin-right: 10px;
  }
  & > button {
    border-radius: 4px;
    border: 0;
    cursor: pointer;
    border: 1px solid #5eff66;
  }
  & > button:hover {
    box-shadow: inset 0px 0px 52px -5px rgba(0, 255, 13, 0.61);
  }
`;
