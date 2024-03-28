import { useState } from 'react';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
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
import FindPasswordBtn from '../components/FindPasswordBtn';
export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'email') {
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
    if (isLoading || email === '' || password === '')
      return;
    try {
      setLoading(true);
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate('/');
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <BigLogo src="/logo.svg" />
      <Wrap>
        <Title>Login Twitter Clone</Title>
        <Form onSubmit={onSubmit}>
          <Input
            name="email"
            placeholder="Email"
            type="email"
            value={email}
            required
            onChange={onChange}
          />
          <Input
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            required
            onChange={onChange}
          />
          <Input
            type="submit"
            value={isLoading ? 'Loading' : 'LOGIN'}
          />
        </Form>
        {error !== '' ? <Error>{error}</Error> : null}
        <Switcher>
          계정이 없으신가요?{' '}
          <Link to="/create-account">회원가입</Link>
        </Switcher>
        <BtnWrap>
          <GithubLoginBtn />
          <GoogleLoginBtn />
          <FindPasswordBtn />
        </BtnWrap>
      </Wrap>
    </Wrapper>
  );
}
