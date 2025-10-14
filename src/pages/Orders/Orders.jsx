import { useDispatch, useSelector } from "react-redux";
import styles from "./Orders.module.css";
import { getOrdersSelector, getUser } from "../../redux/orders/selectors";
import OrderItem from "../../components/OrderItem/OrderItem";
import { useEffect } from "react";
import { getOrders } from "../../redux/orders/operations";
import { setUserEmail } from "../../redux/orders/slice";

export default function Orders() {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const email = evt.target[0].value.trim().toLowerCase();

    dispatch(setUserEmail(email));
    dispatch(
      getOrders({
        patch: "/auth",
        params: { email },
      })
    );
  };

  const orders = useSelector(getOrdersSelector);
  const user = useSelector(getUser);
  console.log("🚀 ~ Orders ~ orders:", orders);

  return (
    <div className={styles.container}>
      <div>
        {orders.length > 0 ? (
          <ul>
            {orders.map((order) => (
              <OrderItem key={order._id} order={order} />
            ))}
          </ul>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              Enter your email:
              <input type="email" name="email" id="emailField" />
            </label>
            <button type="submit">Send login link</button>
          </form>
        )}
      </div>
    </div>
  );
}
