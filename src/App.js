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

  const handleRegister = (username) => {
      setUser({username});
  }

  const handleLogin = (username) => {
    setUser({username})
  }

  const handleLogout = () => {
    setUser(null);
  }
    console.log(user);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout user={user} onLogout={handleLogout}/>}>
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
          
        <Route>
          <Route path="/register" element={
            <Suspense fallback={<div>Loading...</div>}>
                <RegisterPage onRegister={handleRegister} />
            </Suspense>
          } />
          <Route path="/pages" element={
                <Suspense fallback={<div>Loading...</div>}>
                    <LoginPage onLogin={handleLogin} />
                </Suspense>
              } />
        </Route>
          
      </Routes>
    </div>
  );
}

export default App;
