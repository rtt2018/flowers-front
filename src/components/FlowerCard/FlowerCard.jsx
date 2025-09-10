import { useDispatch } from "react-redux";
import styles from "./FlowerCard.module.css";
import { MdAddShoppingCart } from "react-icons/md";
import { addPositionToCart } from "../../redux/order/slice";

export default function FlowerCard({ flower }) {
  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();
    dispatch(
      addPositionToCart({
        _id: flower._id,
        price: flower.price,
        amount: 1,
      })
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.thumb}>
          <img
            className={styles.flowerImage}
            src={flower.image}
            alt={flower.name}
          />
        </div>
        <h3 className={styles.flowerHeader}>{flower.name}</h3>
        <p className={styles.descr}>{flower.description}</p>
        <p className={styles.descr}>
          Shop: <span className={styles.bold}>{flower.shopName}</span>
        </p>
        <div className={styles.cartButtonWrapper}>
          <p>
            Price: <span className={styles.bold}>{flower.price}</span> money
          </p>
          <button
            className={styles.cartButton}
            type="button"
            onClick={handleClick}
          >
            <MdAddShoppingCart className={styles.cartIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}
