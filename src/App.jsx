import { useEffect, useState } from 'react'
import MultiSelectQuestion from './components/MultiSelectQuestion.jsx'
import ProgressBar from './components/ProgressBar.jsx'
import SceneIllustration from './components/SceneIllustration.jsx'
import RecapSheet from './components/RecapSheet.jsx'
import { courseStages } from './content/course.js'

function Welcome({ onStart, finished }) {
  return (
    <section className="hero" id="accueil" aria-labelledby="page-title">
      <div className="hero-copy">
        <p className="eyebrow">CAPSULE INTERACTIVE · 13–15 ANS</p>
        <h1 id="page-title" tabIndex="-1">Reconnaître une situation de cyberharcèlement</h1>
        <p className="intro">
          Apprends à repérer les indices importants, à comparer différentes
          situations et à savoir quand demander de l’aide.
        </p>
        <div className="welcome-mobile-art">
          <SceneIllustration kind="welcome" />
        </div>
        <ul className="learning-goals">
          <li><span aria-hidden="true">✓</span> Repérer les comportements préoccupants</li>
          <li><span aria-hidden="true">✓</span> Distinguer conflit, plaisanterie et situation possible de cyberharcèlement</li>
          <li><span aria-hidden="true">✓</span> Analyser une nouvelle situation</li>
        </ul>
        <button className="start-button" onClick={onStart}>
          {finished ? 'Revoir la capsule' : 'Commencer la capsule'}
          <span aria-hidden="true">→</span>
        </button>
        <p className="privacy-note">Activité individuelle · À ton rythme · Aucune réponse n’est envoyée ni conservée après actualisation</p>
      </div>

      <aside className="side-card" aria-label="Aperçu du parcours">
        <div className="illustration" aria-hidden="true">
          <SceneIllustration kind="welcome" />
        </div>
        <div className="side-card-copy">
          <p className="card-label">TON PARCOURS</p>
          <p>{finished ? 'Bravo, tu as terminé les six étapes.' : '6 étapes pour mieux comprendre les situations en ligne.'}</p>
          <div className="step-dots" aria-label="Six étapes">
            {courseStages.map((stage, index) => <span key={stage.id} className={index === 0 ? 'active' : ''} />)}
          </div>
        </div>
      </aside>
    </section>
  )
}

function App() {
  const [currentStep, setCurrentStep] = useState(-1)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState({})
  const [classifications, setClassifications] = useState({})
  const [classificationSubmitted, setClassificationSubmitted] = useState(false)
  const [finished, setFinished] = useState(false)
  const stage = currentStep >= 0 ? courseStages[currentStep] : null
  const submittedForStage = stage ? Boolean(submitted[stage.id]) : false
  const selectedAnswers = stage ? answers[stage.id] ?? [] : []

  useEffect(() => {
    document.getElementById(currentStep >= 0 ? 'stage-title' : 'page-title')?.focus()
  }, [currentStep])

  function startCourse() {
    setFinished(false)
    setAnswers({})
    setSubmitted({})
    setClassifications({})
    setClassificationSubmitted(false)
    setCurrentStep(0)
  }

  function toggleAnswer(optionId) {
    if (!stage || submittedForStage) return
    setAnswers((previous) => {
      const current = previous[stage.id] ?? []
      const updated = current.includes(optionId)
        ? current.filter((id) => id !== optionId)
        : [...current, optionId]
      return { ...previous, [stage.id]: updated }
    })
  }

  function submitActivity() {
    if (!stage) return
    if (stage.type === 'classify') {
      setClassificationSubmitted(true)
    } else {
      setSubmitted((previous) => ({ ...previous, [stage.id]: true }))
    }
  }

  function goNext() {
    if (currentStep === courseStages.length - 1) {
      setFinished(true)
      setCurrentStep(-1)
      return
    }
    setCurrentStep((step) => Math.min(step + 1, courseStages.length - 1))
  }

  function goPrevious() {
    setCurrentStep((step) => Math.max(step - 1, 0))
  }

  const activityReady = stage?.type === 'multi-select'
    ? selectedAnswers.length > 0
    : stage?.type === 'classify'
      ? stage.situations.every((situation) => classifications[situation.id])
      : true
  const mayContinue = stage?.type === 'multi-select'
    ? submittedForStage
    : stage?.type === 'classify'
      ? classificationSubmitted
      : true
  const answerIsCorrect = stage?.type === 'multi-select'
    ? selectedAnswers.length === stage.correct.length && stage.correct.every((id) => selectedAnswers.includes(id))
    : false
  const classificationIsCorrect = stage?.type === 'classify'
    ? stage.situations.every((situation) => classifications[situation.id] === situation.answer)
    : false

  return (
    <main className="page-shell">
      <a className="skip-link" href={stage ? "#stage-title" : "#page-title"}>Aller au contenu</a>
      <header className="topbar">
        <button className="brand" onClick={() => setCurrentStep(-1)} aria-label="Retour à l’accueil de la capsule">
          <span className="brand-mark" aria-hidden="true">C</span>
          <span>Capsule citoyenne</span>
        </button>
        <span className="duration"><span aria-hidden="true">◷</span> 8 min</span>
      </header>

      {!stage ? (
        <Welcome onStart={startCourse} finished={finished} />
      ) : (
        <section className="course-view" aria-labelledby="stage-title">
          <ProgressBar current={currentStep} total={courseStages.length} title={stage.title} />
          <article className="lesson-card">
            <div className="stage-heading">
              <div>
                <p className="eyebrow">ÉTAPE {currentStep + 1} · {stage.duration}</p>
                <h1 id="stage-title" tabIndex="-1">{stage.title}</h1>
              </div>
              <span className="stage-time" aria-label={`Durée estimée : ${stage.duration}`}>{stage.duration}</span>
            </div>
            <p className="lesson-instruction">{stage.instruction}</p>

            {stage.type === 'intro' && (
              <div className="intro-illustration-row">
                <SceneIllustration kind={stage.visual} />
                <div className="goal-panel">
                  <h2>À la fin, tu pourras :</h2>
                  <ul className="takeaway-list">
                    <li>repérer plusieurs indices dans une situation en ligne ;</li>
                    <li>distinguer un désaccord ponctuel d’une humiliation répétée ;</li>
                    <li>expliquer pourquoi une situation peut nécessiter de l’aide.</li>
                  </ul>
                  <p className="gentle-note">On cherche des indices pour mieux comprendre, pas à poser un diagnostic.</p>
                </div>
              </div>
            )}

            {stage.type === 'resource' && (
              <div className="resource-section">
              <div className="goal-panel">
                <h2>Les repères pour analyser une situation</h2>
                <p>Observe les comportements, leur répétition, la diffusion des contenus et leurs conséquences pour la personne concernée.</p>
                <ul className="takeaway-list">
                  <li><strong>Répétition :</strong> les attaques reviennent. Les repartages peuvent multiplier les attaques contre la même personne.</li>
                  <li><strong>Humiliation et diffusion :</strong> des moqueries, des insultes ou un montage peuvent blesser, surtout quand ils circulent dans plusieurs groupes.</li>
                  <li><strong>Contexte et vécu :</strong> cherche à comprendre ce qui se passe et ce que ressent la personne.</li>
                </ul>
                <p>Un conflit ponctuel est différent d’attaques répétées. Une plaisanterie doit être acceptée par les personnes concernées et s’arrêter dès qu’une personne exprime son désaccord.</p>
                <p className="gentle-note">Une violence isolée reste préoccupante : tu peux demander de l’aide sans attendre qu’elle se répète. La personne n’a pas besoin d’avoir demandé l’arrêt pour être prise au sérieux.</p>
              </div>
              <div className="resource-layout">
                <SceneIllustration kind={stage.visual} />
                <div className="resource-card">
                  <span className="resource-icon" aria-hidden="true">↗</span>
                  <div>
                    <p className="card-label">RESSOURCE OFFICIELLE</p>
                    <h2>{stage.resourceTitle}</h2>
                    <p>{stage.resourceSource}</p>
                  </div>
                  <a className="resource-link" href={stage.resourceUrl} target="_blank" rel="noreferrer">
                    Ouvrir l’infographie (PDF, nouvel onglet) <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
              </div>
            )}

            {stage.type === 'multi-select' && (
              <div className="activity-block">
                {stage.conversation && (
                  <div className="conversation-scene-row">
                    <SceneIllustration kind={stage.visual} compact />
                    <div className="conversation" aria-label="Conversation fictive entre Nathan, Emma et Lucas">
                      {stage.conversation.map((line, index) => (
                        <p className={`chat-line chat-${index % 2}`} key={`${line.speaker}-${index}`}>
                          <strong>{line.speaker}</strong><span>{line.text}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {stage.facts && (
                  <div className="assessment-scene">
                    <SceneIllustration kind={stage.visual} compact />
                    <div className="fact-grid" aria-label="Indices dans la situation d’Inès">
                      {stage.facts.map((fact) => (
                        <div className="fact-card" key={fact.title}>
                          <span aria-hidden="true">{fact.icon}</span>
                          <div><strong>{fact.title}</strong><p>{fact.text}</p></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <p className="activity-hint">{submittedForStage ? "Correction affichée. Tu peux réessayer ou continuer." : "Plusieurs réponses sont possibles. Sélectionne au moins une réponse, puis vérifie tes choix."}</p>
                <MultiSelectQuestion
                  question={stage.question}
                  options={stage.options}
                  selected={selectedAnswers}
                  onToggle={toggleAnswer}
                  submitted={submittedForStage}
                  correct={stage.correct}
                />
                {!submittedForStage ? (
                  <button className="secondary-button" onClick={submitActivity} disabled={!activityReady}>
                    Vérifier mes réponses
                  </button>
                ) : (
                  <div className={`feedback-box ${answerIsCorrect ? 'feedback-success' : 'feedback-review'}`} role="status">
                    <strong>{answerIsCorrect ? 'Bien joué !' : 'Regardons les indices ensemble'}</strong>
                    <p>{stage.feedback}</p>
                    <button className="secondary-button retry-button" onClick={() => {
                      setSubmitted((previous) => ({ ...previous, [stage.id]: false }))
                      setAnswers((previous) => ({ ...previous, [stage.id]: [] }))
                    }}>Réessayer cette activité</button>
                  </div>
                )}
              </div>
            )}

            {stage.type === 'classify' && (
              <div className="activity-block classification-list">
                <p className="activity-hint">Choisis une catégorie pour chacune des trois situations pour afficher la correction.</p>
                {stage.situations.map((situation) => {
                  const correct = classifications[situation.id] === situation.answer
                  const incorrect = classificationSubmitted && !correct
                  return (
                    <fieldset className={`scenario-card ${classificationSubmitted ? (correct ? 'scenario-correct' : 'scenario-review') : ''}`} key={situation.id}>
                      <legend><span className="scenario-letter">{situation.id}</span>{situation.title}</legend>
                      <SceneIllustration kind={situation.visual} compact />
                      <p>{situation.text}</p>
                      <label className="select-label" htmlFor={`category-${situation.id}`}>Catégorie</label>
                      <select
                        id={`category-${situation.id}`}
                        value={classifications[situation.id] ?? ''}
                        disabled={classificationSubmitted}
                        onChange={(event) => setClassifications((previous) => ({ ...previous, [situation.id]: event.target.value }))}
                      >
                        <option value="" disabled>Choisir une catégorie</option>
                        {stage.categories.map((category) => <option key={category} value={category}>{category}</option>)}
                      </select>
                      {classificationSubmitted && (
                        <div className="scenario-feedback" role="status">
                          <strong>{correct ? 'Catégorie attendue' : `Catégorie attendue : ${situation.answer}`}</strong>
                          <p>{situation.feedback}</p>
                        </div>
                      )}
                      {incorrect && <span className="sr-only">La catégorie choisie ne correspond pas à la réponse attendue.</span>}
                    </fieldset>
                  )
                })}
                {!classificationSubmitted ? (
                  <button className="secondary-button" onClick={submitActivity} disabled={!activityReady}>
                    Afficher la correction
                  </button>
                ) : (
                  <div className={`feedback-box ${classificationIsCorrect ? 'feedback-success' : 'feedback-review'}`} role="status">
                    <strong>{classificationIsCorrect ? 'Tout est bien classé !' : 'Compare tes choix avec les corrections.'}</strong>
                    <p>Une situation possible se repère à partir de plusieurs indices et de leur contexte.</p>
                    <button className="secondary-button retry-button" onClick={() => { setClassificationSubmitted(false); setClassifications({}) }}>Réessayer le classement</button>
                  </div>
                )}
              </div>
            )}

            {stage.type === 'summary' && (
              <RecapSheet stage={stage} resource={courseStages.find((item) => item.type === 'resource')} />
            )}

            {!mayContinue && <p className="activity-hint">Vérifie tes réponses pour pouvoir continuer. Tu pourras avancer même si tu t’es trompé.</p>}
            <nav className="lesson-navigation" aria-label="Navigation de la capsule">
              <button className="back-button" onClick={goPrevious} disabled={currentStep === 0}>← Précédent</button>
              <button className="start-button" onClick={goNext} disabled={!mayContinue}>
                {currentStep === courseStages.length - 1 ? 'Terminer la capsule' : 'Continuer'}
                <span aria-hidden="true">→</span>
              </button>
            </nav>
          </article>
        </section>
      )}

      <footer className="footer-note">
        En cas de doute, parle à un adulte de confiance. Cette capsule aide à repérer des indices ; elle ne pose pas de diagnostic.
      </footer>
    </main>
  )
}

export default App
