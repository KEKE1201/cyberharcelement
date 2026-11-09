export default function MultiSelectQuestion({
  question,
  options,
  selected,
  onToggle,
  submitted,
  correct,
}) {
  return (
    <fieldset className="question-fieldset">
      <legend>{question}</legend>
      <div className="answer-list">
        {options.map((option) => {
          const chosen = selected.includes(option.id)
          const isCorrect = correct.includes(option.id)
          const resultClass = submitted ? (isCorrect ? 'answer-correct' : chosen ? 'answer-incorrect' : '') : ''

          return (
            <label className={`answer-option ${chosen ? 'answer-selected' : ''} ${resultClass}`} key={option.id}>
              <input
                type="checkbox"
                checked={chosen}
                disabled={submitted}
                onChange={() => onToggle(option.id)}
              />
              <span className="answer-letter" aria-hidden="true">{option.id}</span>
              <span>{option.text}</span>
              {submitted && isCorrect && <span className="answer-result">Réponse attendue</span>}
              {submitted && chosen && !isCorrect && <span className="answer-result answer-result-review">À revoir</span>}
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
