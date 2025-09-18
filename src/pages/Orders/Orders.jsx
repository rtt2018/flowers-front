import { useDispatch, useSelector } from "react-redux";
import styles from "./Orders.module.css";
import { getOrdersSelector } from "../../redux/orders/selectors";
import OrderItem from "../../components/OrderItem/OrderItem";
import { useEffect } from "react";
import { getOrders } from "../../redux/orders/operations";

export default function Orders() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getOrders({
        patch: "/order",
        params: { user: { email: "r.taras.t.1@gmail.com" } },
      })
    );
  }, [dispatch]);

  const orders = useSelector(getOrdersSelector);
  console.log("🚀 ~ Orders ~ orders:", orders);

  return (
    <div className={styles.container}>
      <div>
        <ul>
          {orders.map((order) => (
            <OrderItem key={order._id} order={order} />
          ))}
        </ul>
      </div>
    </div>
  );
}
