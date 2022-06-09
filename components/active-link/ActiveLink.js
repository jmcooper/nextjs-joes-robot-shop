import Link from 'next/link'
import { useRouter } from "next/router"

export default function ActiveLink({ href, children, className, exact }) {
  const router = useRouter()
  let finalHref

  function queryParamLengthsMatch(linkQueryParams) {
    linkQueryParamsCount = linkQueryParams ? linkQueryParams.length : 0
    if (linkQueryParamsCount !== Object.keys(href.query).length)
      return false
  }

  function queryParamsMatch(linkQueryParams) {
    let linkQueryParamNames = Object.keys(linkQueryParams)
    if (exact && linkQueryParamNames.length != router.query.length)
      return false
    return linkQueryParamNames.every(key => router.query[key] === linkQueryParams[key])
  }

  finalHref = href.query ? href.pathname : href
  finalHref = finalHref === '/' ? '/home' : finalHref

  let activeClassName

  if (router.pathname !== finalHref)
    activeClassName = null
  else {
    if (exact && !queryParamLengthsMatch(href.query))
      return false
    else if (!href.query)
      activeClassName = 'active'
    else
      activeClassName = queryParamsMatch(href.query)
        ? 'active'
        : null
  }

  let classNames = activeClassName ?? ''
  if (className)
    classNames = classNames + ' ' + className

  return (
    <Link href={href}><a className={classNames}>{children}</a></Link>
  )
}