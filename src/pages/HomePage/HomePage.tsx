import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { ERR_MESSAGE } from '../../App/constants/constants';
import { CardsList } from '../../features';
import { Profile } from '../../widgets';
import { useCards } from '../../features/cardsList';

const HomePage = () => {
  const { getCards } = useCards();

  useEffect(() => {
    try {
      getCards();
    } catch {
      toast.error(ERR_MESSAGE.cardsFailed);
    }
  }, []);

  return (
    <main>
      <Profile />
      <CardsList />
    </main>
  );
};

export default HomePage;
