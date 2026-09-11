export default function SiteHeader() {
  return (
    <header className="header">
      <div className="logo">
        <img className="logo-image" src="/webp/logo.webp" alt="ZFT Group logo" />
      </div>
      <a
        className="lang-switch"
        href="https://www.zft-group.com/"
        aria-label="Switch language"
      >
        <span>EN</span>
        <span>CN</span>
      </a>
    </header>
  )
}
