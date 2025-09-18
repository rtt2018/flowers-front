import { Link, NavLink, useLocation } from "react-router";
import styles from "./Header.module.css";

export default function Header() {
  const location = useLocation();

  return (
    <header className={styles.container}>
      <div className={styles.headerWrapper}>
        <div className={styles.navList}>
          <NavLink to={"/"}>Shop</NavLink>
          <NavLink to={"/cart"}>Shopping Cart</NavLink>
          <NavLink to={"/orders"}>Orders</NavLink>
        </div>
        {location.pathname.includes("cart") ||
        location.pathname.includes("orders") ? null : (
          <div className={styles.sortContainer}>
            <Link to={`${location.pathname}?sortBy=price`}>Sort by price</Link>
            <Link to={`${location.pathname}?sortBy=productionDate`}>
              Sort by date
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
