import { useState } from "react";
import { CartIcon, SearchIcon } from "./icons";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../store/CartContext";

export function Header() {
  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.brand} to="/" aria-label="BuildMart home">
          <span className={styles.logo} aria-hidden="true">
            BM
          </span>
          <span className={styles.brandName}>BuildMart</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <Link className={styles.navLink} to="/">
            Products
          </Link>
          <button className={styles.navLinkButton} type="button">
            Categories
          </button>
          <button className={styles.navLinkButton} type="button">
            Deals
          </button>
          <button className={styles.navLinkButton} type="button">
            About
          </button>
        </nav>

        <div className={styles.headerRight}>
          <div className={styles.searchWrap}>
            <SearchIcon className={styles.searchIcon} />
            <input
              className={styles.search}
              placeholder="Search products..."
              aria-label="Search products"
            />
          </div>

          <button
            className={`${styles.iconBtn} ${styles.mobileOnly}`}
            type="button"
            aria-label="Open search"
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            <SearchIcon />
          </button>

          <Link className={styles.cart} to="/cart" aria-label="Cart">
            <CartIcon />
            {cartCount > 0 ? <span className={styles.cartBadge}>{cartCount}</span> : null}
          </Link>

          <button
            className={`${styles.iconBtn} ${styles.mobileOnly}`}
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            <span className={styles.burger} />
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className={styles.mobileMenu} role="dialog" aria-label="Mobile menu">
          <div className={styles.mobileMenuInner}>
            <div className={styles.mobileSearchWrap}>
              <SearchIcon className={styles.searchIcon} />
              <input
                className={styles.search}
                placeholder="Search products..."
                aria-label="Search products"
              />
            </div>
            <nav className={styles.mobileNav} aria-label="Mobile primary">
              <Link className={styles.mobileNavLink} to="/" onClick={() => setMobileMenuOpen(false)}>
                Products
              </Link>
              <button className={styles.mobileNavButton} type="button">
                Categories
              </button>
              <button className={styles.mobileNavButton} type="button">
                Deals
              </button>
              <button className={styles.mobileNavButton} type="button">
                About
              </button>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}

