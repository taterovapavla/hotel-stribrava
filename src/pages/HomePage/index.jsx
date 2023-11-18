import './style.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { RoomList } from '../../components/RoomList';
import { RoomSelected } from '../../components/RoomSelected'
import { useState, useEffect } from 'react'


export const HomePage = () => {
  const [rooms, setRooms] = useState();
  const [selectedRoom, setSelectedRoom] = useState();
  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('http://localhost:4000/api/rooms') 
      const data = await response.json()
      setRooms(data.result)
      setSelectedRoom(data.result[0]);
    }
    fetchRooms()
  }, [])

  return (
    <>
      <Header />
      <RoomList rooms={rooms} onSelect={setSelectedRoom} />
      {selectedRoom ? <RoomSelected room={selectedRoom} /> : null}
      <Footer />
    </>
  );
};
