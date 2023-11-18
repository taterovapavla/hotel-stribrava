import { Room } from '../Room'
import './style.css'

export const RoomList = ({rooms, onSelect}) => {
  console.log(rooms)
  return (
    <section className="dark">
    <div className="container">
      <h2>Heading</h2>
      <p>
        Quas odio quidem, enim nihil unde quia temporibus vitae in ab.
      </p>
      <div className="cards-row">
        {Array.isArray(rooms) ? rooms.map((room) => (
        <Room
        id={room.id}
         key={room.id}
         title={room.name}
         body={room.description}
         image={room.image}
         onSelect={onSelect}
         />)) : null}
      </div>
    </div>
  </section>
  )
}