import './styles/App.css';
import { Toaster } from 'react-hot-toast';
import { Header, Footer } from '../widgets';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
