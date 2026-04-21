import { products } from "../data/products";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductCard } from "../components/ProductCard";
import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.hero}>
            <h1 className={styles.h1}>Building Materials</h1>
            <p className={styles.subtitle}>Premium construction supplies for all your projects</p>
          </section>

          {/* Блок controls полностью удалён */}

          <section className={styles.grid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}