export default function RecapSheet({ stage, resource }) {
  return (
    <section className="recap-sheet" aria-labelledby="recap-title">
      <p className="eyebrow">FICHE RÉCAPITULATIVE · 13–15 ANS</p>
      <h2 id="recap-title">Reconnaître une situation de cyberharcèlement</h2>
      <ul className="takeaway-list">
        {stage.takeaways.map((text) => <li key={text}>{text}</li>)}
      </ul>
      <h3>Trois situations à distinguer</h3>
      <p><strong>Conflit ponctuel :</strong> un désaccord isolé qui s’arrête.</p>
      <p><strong>Plaisanterie consentie :</strong> chacun apprécie l’échange ; on arrête dès qu’une personne le demande.</p>
      <p><strong>Cyberharcèlement possible :</strong> des attaques répétées, humiliantes ou diffusées à plusieurs, dont il faut examiner le contexte.</p>
      <h3>Que faire si tu es victime ou témoin ?</h3>
      <p>Parle à un adulte de confiance : parent, professeur, CPE ou infirmier scolaire. Si le premier adulte ne t’aide pas, parles-en à un autre. Tu n’as pas à gérer cela seul.</p>
      <p>Ne relaie pas les contenus humiliants. Avec un adulte, conserve les preuves utiles (captures, dates), signale les contenus et bloque les comptes concernés.</p>
      <p>Cette fiche aide à repérer des indices ; elle ne pose pas de diagnostic juridique.</p>
      <h3>Ressources à retrouver</h3>
      <p><a href={resource.resourceUrl} target="_blank" rel="noreferrer">Ministère de l’Éducation nationale — {resource.resourceTitle} (PDF, octobre 2023, nouvel onglet)</a></p>
      <p className="print-source">education.gouv.fr · Rubrique « Non au harcèlement »</p>
      <p><a href="https://www.education.gouv.fr/non-au-harcelement/qu-est-ce-que-le-harcelement-325361" target="_blank" rel="noreferrer">Comprendre le harcèlement — education.gouv.fr (nouvel onglet)</a></p>
      <div className="print-controls">
        <button className="secondary-button" onClick={() => window.print()}>Imprimer ou enregistrer en PDF</button>
        <p>Dans la fenêtre d’impression, choisis ton imprimante ou « Enregistrer au format PDF ». Seule cette fiche sera imprimée.</p>
      </div>
    </section>
  )
}
