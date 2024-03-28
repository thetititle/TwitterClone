import {
  GithubAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { Button, BtnLogo } from './AuthComponent';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
export default function GithubLoginBtn() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      // await signInWithRedirect(auth, provider);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button onClick={onClick}>
      <BtnLogo src="/github-logo.svg"></BtnLogo>
      Github으로 로그인하기
    </Button>
  );
}
