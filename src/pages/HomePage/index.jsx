import './style.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { RoomList } from '../../components/RoomList';
import { RoomSelected } from '../../components/RoomSelected'
import { useState, useEffect } from 'react'


export const HomePage = () => {
  const [rooms, setRooms] = useState();
  const [selectedRoomId, setSelectedRoomId] = useState();
  const selectedRoom = (rooms || []).find(r => r.id === selectedRoomId);
  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('http://localhost:4000/api/rooms') 
      const data = await response.json()
      setRooms(data.result)
    }
    fetchRooms()
  }, [])

  return (
    <>
      <Header />
      <RoomList rooms={rooms} onSelect={setSelectedRoomId} />
      {selectedRoom ? <RoomSelected room={selectedRoom} /> : null}
      <Footer />
    </>
  );
};
