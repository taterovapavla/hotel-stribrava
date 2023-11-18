import './style.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { RoomList } from '../../components/RoomList';
import { RoomSelected } from '../../components/RoomSelected'

export const HomePage = () => {
  return (
    <>
      <Header />
      <RoomList />
      <RoomSelected />
      <Footer />
    </>
  );
};
