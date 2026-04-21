import { useMemo, useState } from "react";
import styles from "./ImageCarousel.module.css";

export function ImageCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const imgs = useMemo(() => images.filter(Boolean).slice(0, 3), [images]);
  const [idx, setIdx] = useState(0);

  if (imgs.length === 0) return null;

  const current = imgs[Math.min(idx, imgs.length - 1)];
  const canPrev = imgs.length > 1;
  const canNext = imgs.length > 1;

  return (
    <div className={styles.wrap}>
      <div className={styles.stage}>
        <img className={styles.img} src={current} alt={alt} />

        {canPrev && (
          <button
            type="button"
            className={`${styles.navBtn} ${styles.prev}`}
            aria-label="Previous image"
            onClick={() => setIdx((i) => (i - 1 + imgs.length) % imgs.length)}
          >
            ‹
          </button>
        )}
        {canNext && (
          <button
            type="button"
            className={`${styles.navBtn} ${styles.next}`}
            aria-label="Next image"
            onClick={() => setIdx((i) => (i + 1) % imgs.length)}
          >
            ›
          </button>
        )}
      </div>

      <div className={styles.thumbs} aria-label="Thumbnails">
        {imgs.map((src, i) => (
          <button
            key={`${src}-${i}`}
            type="button"
            className={`${styles.thumb} ${i === idx ? styles.thumbActive : ""}`}
            onClick={() => setIdx(i)}
            aria-label={`Select image ${i + 1}`}
          >
            <img alt="" src={src} className={styles.thumbImg} />
          </button>
        ))}
      </div>
    </div>
  );
}

