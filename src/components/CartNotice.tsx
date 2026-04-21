import { createPortal } from "react-dom";
import { useCart } from "../store/CartContext";
import styles from "./CartNotice.module.css";

export function CartNotice() {
  const { notice } = useCart();

  if (!notice) return null;

  const node = (
    <div
      className={styles.toastViewport}
      style={{
        position: "fixed",
        zIndex: 2147483647,
        pointerEvents: "none",
      }}
      role="status"
      aria-live="polite"
    >
      <div className={styles.toastPanel}>
        <span className={styles.icon} aria-hidden="true">
          <svg className={styles.check} viewBox="0 0 12 10" width="11" height="9" fill="none">
            <path
              d="M1 5.5L4.5 9L11 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className={styles.message}>{notice.message}</span>
      </div>
    </div>
  );

  return createPortal(node, document.body);
}
