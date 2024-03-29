import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, TodoPage, LoginPage, SignUpPage } from './pages';
import { AuthProvider } from 'contexts/AuthContext';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {/* 掛載AuthProvider */}
        <AuthProvider>
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="todo" element={<TodoPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
