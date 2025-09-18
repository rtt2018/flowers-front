import { useDispatch } from "react-redux";
import styles from "./CartPosition.module.css";
import { BsTrash } from "react-icons/bs";
import {
  deletePosition,
  downPositionCount,
  upPositionCount,
} from "../../redux/order/slice";

export default function CartPosition({ item }) {
  const dispatch = useDispatch();

  const amountChange = () => {};
  const removePosition = (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
    dispatch(deletePosition(item));
  };

  const upAmount = () => {
    dispatch(upPositionCount(item));
  };

  const downAmount = () => {
    dispatch(downPositionCount(item));
  };

  return (
    <li className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgnameWrapper}>
          <div className={styles.thumb}>
            <img
              src={item.flower.image}
              alt=""
              className={styles.flowerImage}
            />
          </div>
          <div className={styles.headWrapper}>
            <h2>{item.flower.name}</h2>
            <p>Price: {item.flower.price} money</p>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button
            type="button"
            className={styles.positionButton}
            onClick={downAmount}
          >
            -
          </button>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            name="quantity"
            id=""
            value={item.amount}
            onChange={amountChange}
            className={styles.amountInput}
          />
          <button
            type="button"
            className={styles.positionButton}
            onClick={upAmount}
          >
            +
          </button>
          <button
            className={styles.positionButton}
            type="button"
            onClick={removePosition}
          >
            <BsTrash className={styles.trashIcon} />
          </button>
        </div>
      </div>
    </li>
  );
}
