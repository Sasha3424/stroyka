import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  CalendarMiniIcon,
  CheckoutArrowIcon,
  MapPinMiniIcon,
  TrashIcon,
} from "../components/icons";
import { useCart } from "../store/CartContext";
import styles from "./Cart.module.css";

function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}

const TAX_RATE = 0.08;
const PROMO_CODES = new Set(["SAVE10", "BUILD10"]);

type CartSidebarProps = {
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  checkoutDisabled?: boolean;
};

function CartSidebar({ subtotal, tax, discount, total, checkoutDisabled }: CartSidebarProps) {
  return (
    <div className={styles.sidebar}>
      <aside className={styles.summary} aria-label="Order summary">
        <h2 className={styles.summaryTitle}>Order Summary</h2>
        <div className={styles.summaryRow}>
          <span>Subtotal</span>
          <strong>{formatPrice(subtotal)}</strong>
        </div>
        <div className={styles.summaryRow}>
          <span>Tax (8%)</span>
          <strong>{formatPrice(tax)}</strong>
        </div>
        {discount > 0 ? (
          <div className={`${styles.summaryRow} ${styles.discountRow}`}>
            <span>Discount (10%)</span>
            <strong>-{formatPrice(discount)}</strong>
          </div>
        ) : null}
        <div className={styles.totalRow}>
          <span>Total</span>
          <strong>{formatPrice(total)}</strong>
        </div>
        <button className={styles.checkout} type="button" disabled={checkoutDisabled}>
          Proceed to Checkout
          <CheckoutArrowIcon className={styles.checkoutArrowIcon} />
        </button>
        <Link className={styles.continueShopping} to="/">
          Continue Shopping
        </Link>
      </aside>

      <aside className={styles.shippingCard} aria-label="Shipping information">
        <h2 className={styles.shippingTitle}>Shipping Information</h2>
        <div className={styles.shipBlock}>
          <span className={styles.shipIconWrap} aria-hidden="true">
            <CalendarMiniIcon className={styles.shipIcon} />
          </span>
          <div>
            <div className={styles.shipLabel}>Estimated Delivery</div>
            <div className={styles.shipValue}>3-5 business days</div>
          </div>
        </div>
        <div className={styles.shipBlock}>
          <span className={styles.shipIconWrap} aria-hidden="true">
            <MapPinMiniIcon className={styles.shipIcon} />
          </span>
          <div>
            <div className={styles.shipLabel}>Shipping Address</div>
            <div className={styles.shipValue}>
              123 Construction Ave,<br />
              Builder City, BC 12345,<br />
              United States
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export function Cart() {
  const { items, subtotal, setQuantity, removeFromCart } = useCart();
  const [promoInput, setPromoInput] = useState("");
  const [appliedPromo, setAppliedPromo] = useState("");
  const [promoError, setPromoError] = useState("");
  const [promoSuccess, setPromoSuccess] = useState(false);

  const isEmpty = items.length === 0;
  const tax = subtotal > 0 ? subtotal * TAX_RATE : 0;
  const discount = appliedPromo ? subtotal * 0.1 : 0;
  const total = subtotal + tax - discount;

  const applyPromo = () => {
    const normalized = promoInput.trim().toUpperCase();
    if (PROMO_CODES.has(normalized)) {
      setAppliedPromo(normalized);
      setPromoError("");
      setPromoSuccess(true);
      return;
    }
    setAppliedPromo("");
    setPromoSuccess(false);
    setPromoError("Invalid promo code");
  };

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.visuallyHidden}>Shopping Cart</h1>

          {isEmpty ? (
            <div className={styles.emptyWrapper}>
              <section aria-label="Empty cart">
                <div className={styles.emptyCard}>
                  <h2 className={styles.emptyHeading}>Your Cart is Empty</h2>
                  <p className={styles.emptySub}>Start shopping to add items to your cart</p>
                  <Link className={styles.browseProducts} to="/">
                    Browse Products →
                  </Link>
                </div>
              </section>
            </div>
          ) : (
            <div className={styles.layout}>
              <h1 className={styles.cartTitle}>Shopping Cart</h1>
              <section className={styles.cartMain} aria-label="Cart items">
                <div className={styles.tableWrap}>
                  <div className={styles.tableHeader} role="row">
                    <div role="columnheader">Product</div>
                    <div className={styles.colPrice} role="columnheader">
                      Price
                    </div>
                    <div className={styles.colQty} role="columnheader">
                      Quantity
                    </div>
                    <div className={styles.colTotal} role="columnheader">
                      Total
                    </div>
                  </div>

                  {items.map((item) => {
                    const lineTotal = item.product.price * item.quantity;
                    return (
                      <div key={item.product.id} className={styles.tableRow} role="row">
                        <div className={styles.cellProduct} role="cell">
                          <img
                            className={styles.itemImage}
                            src={item.product.imageUrl}
                            alt=""
                          />
                          <div>
                            <h2 className={styles.itemTitle}>{item.product.name}</h2>
                            <p className={styles.itemCategory}>{item.product.category}</p>
                          </div>
                        </div>
                        <div className={styles.cellPrice} role="cell">
                          {formatPrice(item.product.price)}
                        </div>
                        <div className={styles.cellQty} role="cell">
                          <div className={styles.qty}>
                            <button
                              type="button"
                              className={styles.qtyBtn}
                              onClick={() => setQuantity(item.product.id, item.quantity - 1)}
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className={styles.qtyValue}>{item.quantity}</span>
                            <button
                              type="button"
                              className={styles.qtyBtn}
                              onClick={() => setQuantity(item.product.id, item.quantity + 1)}
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className={styles.cellTotal} role="cell">
                          <div className={styles.totalCellInner}>
                            <span className={styles.lineTotal}>{formatPrice(lineTotal)}</span>
                            <button
                              type="button"
                              className={styles.trashBtn}
                              onClick={() => removeFromCart(item.product.id)}
                              aria-label={`Remove ${item.product.name} from cart`}
                            >
                              <TrashIcon />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className={styles.promoSection}>
                  <p className={styles.promoQuestion}>Have a promo code?</p>
                  <div className={styles.promoRow}>
                    <input
                      className={styles.promoInput}
                      value={promoInput}
                      onChange={(event) => {
                        setPromoInput(event.target.value);
                        if (promoError) setPromoError("");
                        if (promoSuccess) setPromoSuccess(false);
                      }}
                      placeholder="Enter promo code"
                      aria-label="Enter promo code"
                    />
                    <button className={styles.promoApply} type="button" onClick={applyPromo}>
                      Apply
                    </button>
                  </div>
                  {!promoSuccess && promoInput.trim().length > 0 ? (
                    <p className={styles.promoHint}>Try code: BUILD10 for 10% off</p>
                  ) : null}
                  {promoSuccess && appliedPromo ? (
                    <p className={styles.promoSuccess}>✓ Promo code applied! You saved 10%</p>
                  ) : null}
                  {promoError ? <p className={styles.promoError}>{promoError}</p> : null}
                </div>
              </section>

              <CartSidebar subtotal={subtotal} tax={tax} discount={discount} total={total} />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
