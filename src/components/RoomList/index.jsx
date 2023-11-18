import { Room } from '../Room'
import './style.css'

export const RoomList = ({rooms}) => {
  console.log(rooms)
  return (
    <section className="dark">
    <div className="container">
      <h2>Heading</h2>
      <p>
        Quas odio quidem, enim nihil unde quia temporibus vitae in ab.
      </p>
      <div className="cards-row">
        {Array.isArray(rooms) ? rooms.map((room) => (<Room key={room.id}/>)) : null}
      </div>
    </div>
  </section>
  )
}