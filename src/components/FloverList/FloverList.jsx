import styles from "./FloverList.module.css";
import FlowerCard from "../FlowerCard/FlowerCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFlowers } from "../../redux/flowers/operations";
import { getHits } from "../../redux/flowers/selectors";
import { useParams, useSearchParams } from "react-router";
import LoadMore from "../LoadMore/LoadMore";

export default function FloverList() {
  const flowers = useSelector(getHits);

  const dispatch = useDispatch();
  const { shopName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const patch = shopName ? `/flowers/${shopName}` : "/flowers";

  useEffect(() => {
    dispatch(
      getFlowers({
        patch,
        searchParams,
      })
    );
  }, [dispatch, patch, searchParams]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ul className={styles.flowersList}>
          {flowers.map((flower) => {
            return <FlowerCard flower={flower} key={flower._id} />;
          })}
        </ul>
        <LoadMore />
      </div>
    </div>
  );
}
