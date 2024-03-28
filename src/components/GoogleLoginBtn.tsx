import {
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { Button, BtnLogo } from './AuthComponent';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
export default function GoogleLoginBtn() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      // await signInWithRedirect(auth, provider);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button onClick={onClick}>
      <BtnLogo src="/google-logo.svg"></BtnLogo>
      Google으로 로그인하기
    </Button>
  );
}
