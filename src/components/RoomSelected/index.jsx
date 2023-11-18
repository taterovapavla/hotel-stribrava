import { Form } from '../Form'
import './style.css'

const room = {
  "id": 1,
  "name": "Úkryt",
  "description": "Strohý avšak pohodlný pokoj ideální pro hosty, kteří chtějí maximálně ušetřit a hledají cenově dostupné ubytování bez ztráty základního komfortu. Vhodné pro všechny, kdo chtějí v našem hotelu rychle přečkat nepřízeň počasí a vydat se rychle zase na cestu ať už pěší nebo po řece.",
  "price": 450,
  "image": "http://localhost:4000/assets/rooms/room01.jpg"
}

export const RoomSelected = () => {
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