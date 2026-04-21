import type { Product } from "../types";
import styles from "./ProductCard.module.css";
import { Rating } from "./Rating";
import { Link } from "react-router-dom";
import { CartIcon } from "./icons";
import { useCart } from "../store/CartContext";

function formatPrice(value: number) {
  // Match screenshot style: "$45.99"
  return `$${value.toFixed(2)}`;
}

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <article className={styles.card}>
      <Link className={styles.media} to={`/product/${product.id}`} aria-label={product.name}>
        <img className={styles.img} alt="" src={product.imageUrl} />
      </Link>

      <div className={styles.body}>
        <h3 className={styles.name}>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>

        <div className={styles.ratingRow}>
          <Rating value={product.rating} />
        </div>

        <div className={styles.priceRow}>
          <div className={styles.price}>{formatPrice(product.price)}</div>
        </div>

        <div className={styles.category}>{product.category}</div>

        <button className={styles.cta} type="button" onClick={() => addToCart(product, 1)}>
          <CartIcon className={styles.ctaIcon} />
          Add to Cart
        </button>
      </div>
    </article>
  );
}

