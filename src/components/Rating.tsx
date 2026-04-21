import styles from "./Rating.module.css";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function Rating({
  value,
  max = 5,
}: {
  value: number;
  max?: number;
}) {
  const v = clamp(value, 0, max);
  const pct = (v / max) * 100;

  return (
    <div className={styles.rating} aria-label={`Rating ${value.toFixed(1)}`}>
      <div className={styles.stars} aria-hidden="true">
        <div className={styles.starsBg}>{"★★★★★".slice(0, max)}</div>
        <div className={styles.starsFg} style={{ width: `${pct}%` }}>
          {"★★★★★".slice(0, max)}
        </div>
      </div>
      <span className={styles.value}>({value.toFixed(1)})</span>
    </div>
  );
}

