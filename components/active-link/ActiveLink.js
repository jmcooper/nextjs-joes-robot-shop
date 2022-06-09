import Link from 'next/link'
import { useRouter } from "next/router"

export default function ActiveLink({ href, children }) {
  const router = useRouter()

  const className = router.pathname === href ? "active" : null

  return (
    <Link href={href}><a className={className}>{children}</a></Link>
  )
}