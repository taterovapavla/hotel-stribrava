import { Room } from '../Room'
import './style.css'

export const RoomList = () => {
  return (
    <section className="dark">
    <div className="container">
      <h2>Heading</h2>
      <p>
        Quas odio quidem, enim nihil unde quia temporibus vitae in ab.
      </p>
      <div className="cards-row">
        <Room />
      </div>
    </div>
  </section>
  )
}