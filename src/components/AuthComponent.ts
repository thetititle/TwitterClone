import styled from 'styled-components';
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  padding: 50px 0px;
  gap: 50px;
`;
export const Title = styled.h1`
  font-size: 42px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
  &[type='submit'] {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;
export const Error = styled.span`
  font-weight: 600;
  color: tomato;
`;
export const Switcher = styled.span`
  a {
    color: #1d9bf0;
    text-decoration: none;
  }
`;
