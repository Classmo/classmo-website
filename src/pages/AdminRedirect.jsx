import { useEffect } from 'react'
import { WEB_APP_URL } from '../constants/links'

const ADMIN_URL = `${WEB_APP_URL}/admin`
// /admin and /admin/…, but not /administrateur or similar.
const ADMIN_PATH = /^\/admin(\/|$)/

export function isAdminPath(pathname) {
  return ADMIN_PATH.test(pathname)
}

/** The admin panel lives in the web app: send /admin and /admin/* there. */
export default function AdminRedirect() {
  useEffect(() => {
    window.location.replace(ADMIN_URL)
  }, [])

  return null
}
