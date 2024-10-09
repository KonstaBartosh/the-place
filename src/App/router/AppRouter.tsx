import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '../../features';
import { NotFoundPage, LoginPage, RegisterPage, HomePage } from '../../pages';

const AppRouter = () => {
  return (
    <main style={{ flexGrow: 1 }}>
      <Routes>
        <Route
          path="/feed"
          element={<HomePage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/register"
            element={<RegisterPage />}
          />
        </Route>
      </Routes>
    </main>
  );
};

export default AppRouter;
