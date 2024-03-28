import styled from 'styled-components';
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 50px 0px;
  gap: 20px;
`;
export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
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

export const Button = styled.button`
  width: 100%;
  background-color: #ffffff;
  font-weight: 500;
  padding: 10px 20px;
  border: none;
  padding: 10px 20px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;
export const Logo = styled.img`
  height: 25px;
`;
