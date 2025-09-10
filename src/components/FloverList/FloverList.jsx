import styles from "./FloverList.module.css";
import FlowerCard from "../FlowerCard/FlowerCard";

export default function FloverList() {
  const test = {
    _id: "01422c349916755dd7563b46",
    name: "Elegant Whites",
    description: "A sophisticated arrangement of white lilies and roses.",
    price: 398,
    image:
      "https://images.unsplash.com/photo-1648628333496-f812bce25f5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDI2Njl8MHwxfHNlYXJjaHw0NXx8Ym91cXVldHN8ZW58MXwwfHx8MTc1NzUzMzE1Nnww&ixlib=rb-4.1.0&q=80&w=400",
    category: "bouquets",
    productionDate: "2025-09-04T00:38:12.234Z",
    shopName: "Rose Garden Emporium",
  };

  return (
    <div className={styles.container}>
      <FlowerCard flower={test} />
    </div>
  );
}
