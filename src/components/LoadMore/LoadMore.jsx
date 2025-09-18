import { useSearchParams } from "react-router";
import {
  getHasNextPage,
  getIsLoading,
  getPage,
  getPerPage,
} from "../../redux/flowers/selectors";
import { setPaginationParams } from "../../redux/flowers/slice";
import styles from "./LoadMore.module.css";
import { useSelector, useDispatch } from "react-redux";

export default function LoadMore() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = useSelector(getPage);
  const hasNextPage = useSelector(getHasNextPage);
  const loading = useSelector(getIsLoading);
  const perPage = useSelector(getPerPage);

  const handleLoadMore = () => {
    const nextPage = (currentPage ?? 1) + 1;
    dispatch(setPaginationParams({ page: nextPage, perPage }));
    setSearchParams((prevParams) => {
      return { ...Object.fromEntries(prevParams), page: nextPage, perPage };
    });
  };

  if (!hasNextPage) {
    return null;
  }

  return (
    <button
      className={styles.loadMoreBtn}
      onClick={handleLoadMore}
      type="button"
      disabled={loading}
    >
      {loading ? <div className={styles.spinner}></div> : "Load more"}
    </button>
  );
}
