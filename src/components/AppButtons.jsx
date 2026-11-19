import { Globe } from 'lucide-react'
import { APP_STORE_URL, GOOGLE_PLAY_URL, WEB_APP_URL } from '../constants/links'
import { AppleIcon, GooglePlayIcon } from './StoreIcons'
import '../styles/app-buttons.css'

const STORE_BUTTONS = [
  { key: 'ios', href: APP_STORE_URL, Icon: AppleIcon, eyebrow: 'Télécharger dans', label: "l'App Store" },
  { key: 'android', href: GOOGLE_PLAY_URL, Icon: GooglePlayIcon, eyebrow: 'Disponible sur', label: 'Google Play' },
]

const WEB_BUTTON = { key: 'web', href: WEB_APP_URL, Icon: Globe, eyebrow: 'Utiliser la', label: 'version web' }

const LAYOUTS = new Set(['hero', 'row'])

function AppButton({ href, Icon, eyebrow, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="app-button"
      aria-label={`${eyebrow} ${label}`}
    >
      <Icon className="app-button-icon" />
      <span className="app-button-text">
        <span className="app-button-eyebrow">{eyebrow}</span>
        <span className="app-button-label">{label}</span>
      </span>
    </a>
  )
}

// Reuses the hero "Propulsé par" pill styling (hero-partner-pill in hero.css).
function WebPill() {
  return (
    <a
      href={WEB_APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="hero-partner-pill app-web-pill"
    >
      <Globe className="app-web-pill-icon" aria-hidden="true" />
      <span>Utiliser la version web</span>
    </a>
  )
}

/**
 * layout="hero": two store buttons, with a full-width web pill underneath.
 * layout="row": all three store-style buttons side by side from tablet up (CTA).
 */
export default function AppButtons({ layout = 'hero' }) {
  const safeLayout = LAYOUTS.has(layout) ? layout : 'hero'

  return (
    <div className={`app-buttons app-buttons--${safeLayout}`}>
      {STORE_BUTTONS.map(({ key, ...button }) => (
        <AppButton key={key} {...button} />
      ))}
      {safeLayout === 'hero' ? <WebPill /> : <AppButton {...WEB_BUTTON} />}
    </div>
  )
}
