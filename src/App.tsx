import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './routes/Home';
import Profile from './routes/Profile';
import Login from './routes/Login';
import CreateAccount from './routes/CreateAccount';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import { auth } from './firebase';
import styled from 'styled-components';
import ProtectRoute from './components/ProtectRoute';
import AppleSDGothicNeoEB00 from '../public/font/AppleSDGothicNeoEB00.woff';
import AppleSDGothicNeoH00 from '../public/font/AppleSDGothicNeoH00.woff';
import AppleSDGothicNeoR00 from '../public/font/AppleSDGothicNeoR00.woff';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectRoute>
        <Layout />
      </ProtectRoute>
    ),
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/create-account',
    element: <CreateAccount />,
  },
]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'AppleSDGothicNeoEB00';
    src: local('AppleSDGothicNeoEB00'), local('AppleSDGothicNeoEB00');
    font-style: normal;
    src: url(${AppleSDGothicNeoEB00}) format('woff');
  }
  @font-face {
    font-family: 'AppleSDGothicNeoH00';
    src: local('AppleSDGothicNeoH00'), local('AppleSDGothicNeoH00');
    font-style: normal;
    src: url(${AppleSDGothicNeoH00}) format('woff');
  }
  @font-face {
    font-family: 'AppleSDGothicNeoR00';
    src: local('AppleSDGothicNeoR00'), local('AppleSDGothicNeoR00');
    font-style: normal;
    src: url(${AppleSDGothicNeoR00}) format('woff');
  }
  body{
    background: #000000;
    color: #ffffff;
    font-family: AppleSDGothicNeoR00, sans-serif, Arial;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
`;
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
function App() {
  const [isLoading, setLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady();
    setLoading(false);
  };
  window.onbeforeunload = () => {
    if (!isLoading) {
      return '';
    }
  };
  window.onunload = () => {
    if (!isLoading) {
      auth.signOut();
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Wrapper>
      <GlobalStyles />
      {isLoading ? (
        <Loading />
      ) : (
        <RouterProvider router={router} />
      )}
    </Wrapper>
  );
}
export default App;
