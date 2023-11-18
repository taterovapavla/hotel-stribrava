import './style.css'
import { useState } from 'react'

export const Order = ({order}) => {
  const [isOpen, setIsOpen] = useState(false);
  const keys = [
    {
      label: 'Od',
      value: order.from
    }, 
    {
      label: 'Do',
      value: order.to
    }, 
    {
      label: 'Počet osob',
      value: order.people
    }, 
    {
      label: 'Stravování',
      value: order.catering
    }, 
    {
      label: 'Domácí mazlíček',
      value: order.pets ? 'Ano' : 'Ne'
    }, 
    {
      label: 'Přistýlka pro dítě',
      value: order.childBed ? 'Ano' : 'Ne'
    }, 
    {
      label: 'Bezbariérový přístup',
      value: order.wheelchairAccess ? 'Ano' : 'Ne'
    },
  ]
  return (
    <div className="order">
      <div className="order__header" onClick={() => setIsOpen(!isOpen)}>
        <div className="order__title">
          {order.email ? <span>E-mail: {order.email}</span> : null}
          {order.telephone ? <span>Telefon: {order.telephone}</span> : null}
        </div>
        <div className="order__price">{order.price} Kč</div>
      </div>
      { isOpen ? 
        <div className="order__body">
          {keys.map((detail) => (
            <div className="order-detail" key={detail.label}>
            <div className="order-detail__label">{detail.label}</div>
            <div className="order-detail__value">{detail.value}</div>
          </div>
          ))}
          
        </div>
      : null }
    </div>
  )
}