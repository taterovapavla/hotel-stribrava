import './style.css'
import { useState } from 'react'
import dayjs from 'dayjs';

const initialData = {
  "from": "",
  "to": "",
  "people": 2,
  "catering": "Žádné",
  "pets": false,
  "childBed": false,
  "wheelchairAccess": false,
  "email": "",
  "telephone": "",
};

const cateringPrices = [
  {
    id: 0,
    label: "Žádné",
    price: 0,
  },
  {
    id: 1,
    label: "Snídani",
    price: 100,
  },
  {
    id: 2,
    label: "Polopenzi",
    price: 200,
  },
  {
    id: 3,
    label: "Plná penzi",
    price: 300,
  },
]

export const Form = ({room}) => {
  const [formData, setFormData] = useState({...initialData});
  const calcPrice = () => {
    const days = dayjs(formData.to).diff(dayjs(formData.from), 'day') || 1;
    const perDay = room.price;
    const pricePet = formData.pets ? Math.ceil(perDay / 4) : 0;
    const priceChildBed = formData.childBed ? Math.ceil(perDay / 2) : 0;
    const cateringPrice = cateringPrices.find(p => p.label === formData.catering)?.price || 0;
    return ((perDay + cateringPrice) * formData.people + pricePet + priceChildBed) * days;
  }
  const price = calcPrice();
  const changeData = (part) => setFormData({...formData, ...part});
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {...formData, roomId: room.id, price: price, status: 'new'};
    fetch('http://localhost:4000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
  return (
    <form onSubmit={onSubmit}>
          <div className="form-fields">
            <label htmlFor="input-from" className="field-label">Od:
            </label>
            <input
              id="input-from"
              className="field-input"
              type="date"
              value={formData.from}
              onChange={e => changeData({from: e.target.value})}
            />
            <label htmlFor="input-to" className="field-label">Do:</label>
            <input
              id="input-to"
              className="field-input"
              type="date"
              value={formData.to}
              onChange={e => changeData({to: e.target.value})}
            />
            <label htmlFor="input-people" className="field-label">Počet osob:</label>
            <input
              id="input-people"
              className="field-input"
              type="number"
              min={1}
              max={20}
              value={formData.people}
              onChange={e => changeData({people: Number(e.target.value)})}
            />
            <label htmlFor="select-catering" className="field-label">Stravování:</label>
            <select
              id="select-catering"
              className="field-input"
              value={formData.catering}
              onChange={e => changeData({catering: e.target.value})}
            >
              {cateringPrices.map(v => <option value={v.label} key={v.id}>{v.label}</option>)}
            </select>
            <label htmlFor="input-pets" className="field-label">Domácí mazlíček:</label>
            <input
              id="input-pets"
              className="field-input"
              type="checkbox"
              value={formData.pets}
              onChange={e => changeData({pets: e.target.checked})}
            />
            <label htmlFor="input-childBed" className="field-label">Přistýlka pro dítě:</label>
            <input
              id="input-childBed"
              className="field-input"
              type="checkbox"
              value={formData.childBed}
              onChange={e => changeData({childBed: e.target.checked})}
            />
            <label htmlFor="input-wheelchairAccess" className="field-label">Bezbariérový přístup:</label>
            <input
              id="input-wheelchairAccess"
              className="field-input"
              type="checkbox"
              value={formData.wheelchairAccess}
              onChange={e => changeData({wheelchairAccess: e.target.checked})}
            />
            <label htmlFor="input-email" className="field-label">E-mail:</label>
            <input
              id="input-email"
              className="field-input"
              type="email"
              value={formData.email}
              onChange={e => changeData({email: e.target.value})}
            />
            <label htmlFor="input-telephone" className="field-label">Telefon:</label>
            <input
              id="input-telephone"
              className="field-input"
              type="tel"
              value={formData.telephone}
              onChange={e => changeData({telephone: e.target.value})}
            />
          </div>
          <p className='form__price'>Celková cena za pobyt: {price} Kč</p>
          <button type="submit" className="wide" disabled={!(formData.email || formData.telephone)}>Odeslat poptávku</button>
        </form>
  )
}