import React from 'react';
import { auth } from '../firebase';
import { Navigate } from 'react-router-dom';
function ProtectRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = auth.currentUser;
  console.log(user);
  if (user === null) {
    return <Navigate to={'/login'} />;
  }
  return children;
}
export default ProtectRoute;
