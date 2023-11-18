import './style.css'

export const Order = ({order}) => {
  return (
    <div className="card">
          <div className="card__title">{order.email}</div>
          <div className="card__title">{order.telephone}</div>
          <div className="card__body">{order.price}</div>
    </div>
  )
}