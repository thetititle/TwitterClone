import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import React, { useState } from 'react';
import { ButtonBorder } from './AuthComponent';
import {
  ModalWapper,
  Modal,
  Title,
  Form,
  Input,
  Span,
  CloseButton,
  BtnWrap,
} from './ModalComponent';
export default function FindPasswordBtn() {
  const [dispaly, setDispaly] = useState({
    display: 'none',
  });
  const [email, setEmail] = useState('');
  const onClick = () => {
    setDispaly({ display: 'block' });
  };
  const closeModal = () => {
    setDispaly({ display: 'none' });
  };
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(e.target.value);
  };
  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (email === '') return;
    try {
      // 사용자체크
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.log(error);
    } finally {
      setDispaly({ display: 'none' });
    }
  };

  return (
    <>
      <ButtonBorder onClick={onClick}>
        <span>비밀번호를 잊으셨나요?</span>
      </ButtonBorder>
      <ModalWapper style={dispaly}>
        <Modal>
          <Title>비밀번호 재설정</Title>
          <Span>
            비밀번호 재설정 메일을 통해 비밀번호를
            변경하려면 계정에 연결된 이메일을 입력하세요.
          </Span>
          <Form onSubmit={onSubmit}>
            <Input
              name="email"
              placeholder="가입한 Email입력"
              type="email"
              value={email}
              required
              onChange={onChange}
            />
            <BtnWrap>
              <Input type="submit" value="재설정" />
              <CloseButton onClick={closeModal}>
                취소
              </CloseButton>
            </BtnWrap>
          </Form>
        </Modal>
      </ModalWapper>
    </>
  );
}
