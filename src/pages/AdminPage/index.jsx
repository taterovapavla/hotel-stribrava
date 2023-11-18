import './style.css';
import { useState, useEffect } from 'react';
import { Order } from '../../components/Order';

export const AdminPage = () => {
  const [orders, setOrders] = useState();
  useEffect(() => {
    const getOrders = async () => {
      const response = await fetch('http://localhost:4000/api/orders');
      const data = await response.json();
      setOrders(data.result);
    }
    getOrders();
  }, [])
  return (
    <>
      <section className="dark">
        <div className="container">
          <h2>Poptávky</h2>
          <div className="orders-list">
            {Array.isArray(orders) ? orders.map((order) => (<Order key={order.id} order={order} />)) : null}
          </div>
        </div>
      </section>
    </>
  );
};
