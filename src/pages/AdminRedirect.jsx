import { useEffect } from 'react'
import { WEB_APP_URL } from '../constants/links'

const ADMIN_URL = `${WEB_APP_URL}/admin`

/** Old /admin links: the admin panel now lives in the web app. */
export default function AdminRedirect() {
  useEffect(() => {
    window.location.replace(ADMIN_URL)
  }, [])

  return (
    <main style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
      <p>
        L’administration a déménagé : <a href={ADMIN_URL}>{ADMIN_URL.replace('https://', '')}</a>
      </p>
    </main>
  )
}
