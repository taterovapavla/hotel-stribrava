import './style.css';
import { useState, useEffect } from 'react';

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
    <div className="container">
      Admin
      {orders ? JSON.stringify(orders) : null}
    </div>
  );
};
