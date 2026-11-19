import ScrollReveal from './ScrollReveal'
import AppButtons from './AppButtons'
import '../styles/cta.css'

export default function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <ScrollReveal>
          <h2>Télécharge Classmo !</h2>
          <p>
            Télécharge l'application ou utilise la version web pour commencer à acheter et vendre tes manuels dès aujourd'hui.
          </p>
          <AppButtons layout="row" />
        </ScrollReveal>
      </div>
    </section>
  )
}
