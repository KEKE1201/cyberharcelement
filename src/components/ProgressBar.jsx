export default function ProgressBar({ current, total, title }) {
  const value = Math.round(((current + 1) / total) * 100)

  return (
    <div className="progress-wrap">
      <div className="progress-meta">
        <span>Étape {current + 1} sur {total}</span>
        <span>{title}</span>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-label="Progression de la capsule"
        aria-valuemin="1"
        aria-valuemax={total}
        aria-valuenow={current + 1}
      >
        <span style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}
