import { Form } from '../Form'
import './style.css'

export const RoomSelected = ({room}) => {
  return (
    <section className="light">
    <div className="container">
      <h2>{room.name}</h2>
      <div className="columns-2">
        <div className="column">
          <img src={room.image} />
          <p>
            {room.description}
          </p>
        </div>
        <Form room={room} />
      </div>
    </div>
  </section>
  )
}