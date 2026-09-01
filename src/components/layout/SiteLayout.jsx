import { Outlet } from 'react-router-dom'
import SiteHeader from './SiteHeader.jsx'
import SiteFooter from './SiteFooter.jsx'

export default function SiteLayout() {
  return (
    <div className="page">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  )
}
