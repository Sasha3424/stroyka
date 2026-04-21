import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "./icons";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topGrid}>
          <div className={styles.brandCol}>
            <h3 className={styles.footerTitle}>BuildMart</h3>
            <p className={styles.footerText}>
              Your trusted source for premium building materials and construction
              supplies since 1995.
            </p>
            <div className={styles.socials} aria-label="Social links">
              <a className={styles.socialLink} href="#" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a className={styles.socialLink} href="#" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a className={styles.socialLink} href="#" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a className={styles.socialLink} href="#" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.list}>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Delivery Info</a>
              </li>
              <li>
                <a href="#">Returns Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.footerTitle}>Customer Service</h3>
            <ul className={styles.list}>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Shipping & Tracking</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.footerTitle}>Newsletter</h3>
            <p className={styles.footerText}>
              Subscribe for updates and exclusive deals.
            </p>
            <div className={styles.newsletterRow}>
              <input
                className={styles.email}
                placeholder="Your email"
                aria-label="Your email"
              />
              <button className={styles.subscribe} type="button" aria-label="Subscribe">
                ✉
              </button>
            </div>
          </div>
        </div>

        <div className={styles.separator} />

        <div className={styles.contactRow}>
          <div>
            <div className={styles.contactLabel}>Phone</div>
            <div className={styles.contactValue}>1-800-BUILD-MART</div>
          </div>
          <div>
            <div className={styles.contactLabel}>Email</div>
            <div className={styles.contactValue}>support@buildmart.com</div>
          </div>
          <div>
            <div className={styles.contactLabel}>Address</div>
            <div className={styles.contactValue}>123 Construction Ave, Builder City, BC 12345</div>
          </div>
        </div>

        <div className={styles.separator} />

        <div className={styles.copyright}>
          © 2026 BuildMart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

