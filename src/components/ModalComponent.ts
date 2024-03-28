import styled from 'styled-components';
export const ModalWapper = styled.div`
  position: absolute;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  // display: none;
`;
export const Modal = styled.div`
  width: 400px;
  height: 300px;
  background-color: ghostwhite;
  padding: 30px;
  border-radius: 15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 5px 0 5px 5px rgba(0, 0, 0, 0.3);
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
export const Title = styled.h1`
  font-family: 'AppleSDGothicNeoEB00';
  font-size: 32px;
  text-align: center;
`;
export const Span = styled.span`
  color: #000000;
  line-height: 1.5;
`;
export const Input = styled.input`
  padding: 0 20px;
  border-radius: 5px;
  border: 1px solid gray;
  width: 100%;
  font-size: 18px;
  line-height: 50px;
  transition: 0.3s;
  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: inset 0 0 0 5px #1d9bf0;
  }
  &[type='submit'] {
    cursor: pointer;
    font-family: 'AppleSDGothicNeoEB00';
    font-size: 18px;
    background-color: #0060a1;
    color: #ffffff;
    border-color: transparent;
    &:hover {
      background-color: #1d9bf0;
      transition: 0.3s;
    }
  }
`;
export const CloseButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  font-size: 18px;
  font-family: 'AppleSDGothicNeoEB00';
  padding: 0 20px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #000000;
    transition: 0.3s;
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  gap: 10px;
`;
