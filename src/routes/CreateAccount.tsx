import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import {
  Wrapper,
  Wrap,
  Title,
  Form,
  Input,
  Error,
  Switcher,
  BigLogo,
  BtnWrap,
} from '../components/AuthComponent';
import GithubLoginBtn from '../components/GithubLoginBtn';
import GoogleLoginBtn from '../components/GoogleLoginBtn';

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
    setError('');
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
    } catch (error) {
      // error가 FirebaseError의 instance라면
      if (error instanceof FirebaseError) {
        //error의 값을 error.message로.
        setError(error.message);
      }
    } finally {
      // try에서 발생한 문제를 catch에서 잘 해결했을 때 실행
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <BigLogo src="/logo.svg" />
      <Wrap>
        <Title>Join Twitter Clone</Title>
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
        <Switcher>
          이미 계정이 있으신가요?{' '}
          <Link to="/login">로그인</Link>
        </Switcher>
        <BtnWrap>
          <GithubLoginBtn />
          <GoogleLoginBtn />
        </BtnWrap>
      </Wrap>
    </Wrapper>
  );
}
