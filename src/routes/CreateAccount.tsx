import styled from 'styled-components';
import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
  gap: 50px;
`;
const Title = styled.h1`
  font-size: 42px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
const Input = styled.input`
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
const Error = styled.span`
  font-weight: 600;
  color: tomato;
`;

export default function CreateAccount() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    // 빈값이면 submit 함수 죽이기 === 실행불가
    // loading일떄도 함수 실행불가
    if (
      isLoading ||
      name === '' ||
      email === '' ||
      password === ''
    )
      return;
    try {
      setLoading(true);
      // user생성 및 자격증명을 하여 로그인함.
      const credential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      console.log(credential.user);
      // 2. 로그인 하고 난 이후 user페이지(Dashboard)로 redirect
      await updateProfile(credential.user, {
        displayName: name,
      });
      navigate('/');
      // 3. Dashboard에서 유저가 누구인지 표기하기 위해 데이터 받아오기
    } catch (e) {
      // user생성 및 자격증명 실패하면 이쪽으로 넘어옴
      // try에서 문제가 발생하면 실행
      // setError()
    } finally {
      // try에서 발생한 문제를 catch에서 잘 해결했을 때 실행
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Title>Join ✖</Title>
      <Form onSubmit={onSubmit}>
        <Input
          name="name"
          placeholder="name"
          type="text"
          value={name}
          required
          onChange={onChange}
        />
        <Input
          name="email"
          placeholder="email"
          type="email"
          value={email}
          required
          onChange={onChange}
        />
        <Input
          name="password"
          placeholder="password"
          type="password"
          value={password}
          required
          onChange={onChange}
        />
        <Input
          type="submit"
          value={isLoading ? 'Loading' : 'Create Account'}
        />
      </Form>
      {error !== '' ? <Error>{error}</Error> : null}
    </Wrapper>
  );
}
