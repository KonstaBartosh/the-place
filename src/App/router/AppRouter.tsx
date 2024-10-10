import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '../../features';
import { NotFoundPage, LoginPage, RegisterPage, HomePage } from '../../pages';
import styles from './AppRouter.module.css';

const AppRouter = () => {
  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default AppRouter;
