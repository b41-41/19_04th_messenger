import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid tomato;
  margin: 50px;
  padding: 10px;
  width: 400px;
  height: auto;
  border-top: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius.normal};
`;

export const SendForm = styled.form`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const TextBox = styled.textarea`
  width: 100%;
  max-height: 100px;
  border: none;
  outline: none;
  resize: none;
  padding: 10px 5px;
  overflow: auto;
`;

export const SendBtn = styled.button`
  width: 50px;
  height: 25px;
  border-radius: ${props => props.theme.borderRadius.normal};
  background: ${props => props.theme.colors.chatPink};
  color: ${props => props.theme.colors.chatTomato};
  font-weight: ${props => props.theme.fontWeight.strong};
`;
