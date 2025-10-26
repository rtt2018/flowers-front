import { useLocation } from "react-router";
import styles from "./LoginPage.module.css";
import { useEffect } from "react";
import api from "../../api/api";
import { getOrders } from "../../redux/orders/operations";
// import { setUserEmail } from "../../redux/orders/slice";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/orders/selectors";
import { getOrdersSelector } from "../../redux/orders/selectors";

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const email = evt.target[0].value.trim().toLowerCase();

    // dispatch(setUserEmail(email));
    dispatch(
      getOrders({
        patch: "/auth",
        params: { email },
      })
    );
  };
  const user = useSelector(getUser);
  const orders = useSelector(getOrdersSelector);
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const token =
    params.get("token") || localStorage.getItem("flowers-token") || null;
  console.log("🚀 ~ LoginPage ~ token:", token);

  const redirectToAuth = useLocation();

  if (orders.length > 0) {
    setTimeout(() => {
      redirectToAuth("/orders", { replace: true });
    }, 5000);
  }

  useEffect(() => {
    if (token) {
      async function loginUserGetOrders() {
        try {
          const response = await api.get(`/login?token=${token}`);
          console.log("🚀 ~ LoginPage ~ response:", response);
          const { user, orders } = response.data;
        } catch (error) {
          return error;
        }
      }
      loginUserGetOrders();
    }
  }, [token]);

  return (
    <div className={styles.container}>
      <h2>Authorization...</h2>
      {orders.length === 0 ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Enter your email:
            <input type="email" name="email" id="emailField" />
          </label>
          <button type="submit">Send login link</button>
        </form>
      ) : (
        <div></div>
      )}
    </div>
  );
}
