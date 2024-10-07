import { Routes, Route } from 'react-router-dom';
import { CardsList, ProtectedRoute } from '../../features';
import { Profile } from '../../widgets';
import { NotFoundPage, LoginPage, RegisterPage } from '../../pages';

const AppRouter = () => {
  const HomePage = () => {
    return (
      <>
        <Profile />
        <CardsList />
      </>
    );
  };

  return (
    <main style={{ flexGrow: 1 }}>
      <Routes>
        <Route
          path="/"
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
