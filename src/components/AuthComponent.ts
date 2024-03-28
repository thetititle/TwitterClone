import styled from 'styled-components';
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 60px;
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  gap: 20px;
`;
export const Title = styled.h1`
  font-family: 'AppleSDGothicNeoEB00';
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
  padding: 0 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 18px;
  line-height: 50px;
  transition: 0.3s;
  &[type='submit'] {
    cursor: pointer;
    font-family: 'AppleSDGothicNeoEB00';
    font-size: 18px;
    background-color: #0060a1;
    color: #ffffff;
    &:hover {
      background-color: #1d9bf0;
      transition: 0.3s;
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
export const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
export const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  padding: 0 20px;
  border: none;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;
export const ButtonBorder = styled.button`
  width: 100%;
  height: 50px;
  background-color: transparent;
  padding: 0 20px;
  border: 1px solid #ffffff;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: 0.3s;
  span {
    color: #ffffff;
    line-height: 50px;
    font-size: 18px;
    font-family: 'AppleSDGothicNeoEB00';
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    transition: 0.3s;
  }
`;
export const BtnLogo = styled.img`
  height: 25px;
`;
export const BigLogo = styled.img`
  height: 200px;
  object-fit: cover;
`;
