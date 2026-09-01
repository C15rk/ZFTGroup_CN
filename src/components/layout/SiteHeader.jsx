export default function SiteHeader() {
  return (
    <header className="header">
      <div className="logo">
        <img className="logo-image" src="/logo.png" alt="ZFT Group logo" />
      </div>
      <button className="lang-switch" type="button" aria-label="Switch language">
        <span>EN</span>
        <span>CN</span>
      </button>
    </header>
  )
}
