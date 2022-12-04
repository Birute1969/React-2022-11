import React, {Suspense} from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLayout} from './Components/PageLayout/PageLayout';

import './App.css';

const HomePage = React.lazy(() => import('./Pages/HomePage/HomePage'));
const AddPage = React.lazy(() => import('./Pages/AddPage/AddPage'));
const RegisterPage = React.lazy(() => import('./Pages/RegisterPage/RegisterPage'));
const LoginPage = React.lazy(() => import('./Pages/LoginPage/LoginPage'));

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleRegister = (username, email, password) => {
      setUser({username});
      setEmail({email});
      setPassword({password});
  }

  const handleLogin = (username) => {
    setUser({username: username});
    setEmail({email: email});
    setPassword({password: password});
  }

  const handleLogout = () => {
    setUser(null);
    setEmail(null);
    setPassword(null)
  }
    console.log(user);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout user={user} email={email} password={password}
        onLogout={handleLogout}/>}>
              <Route index element={
                <Suspense fallback={<div>Loading...</div>}>
                    <HomePage />
                </Suspense>
              } />

              <Route path="/pages" element={
                <Suspense fallback={<div>Loading...</div>}>
                    <AddPage />
                </Suspense>
              } />

        </Route>
        
        <Route path="/register" element={
          <Suspense fallback={<div>Loading...</div>}>
              <RegisterPage onRegister={handleRegister} />
          </Suspense>
          } />

        <Route path="/login" element={
          <Suspense fallback={<div>Loading...</div>}>
              <LoginPage onLogin={handleLogin} />
          </Suspense>
          } />
      </Routes>
    </div>
  );
}

export default App;