import { useEffect, useRef, useState } from 'react'
import SiteFooter from '../../../components/layout/SiteFooter.jsx'
import HistoryOfCofon from './HistoryOfCofon.jsx'
import HistoryOfJeffel from './HistoryOfJeffel.jsx'
import HistoryOfSeinfel from './HistoryOfSeinfel.jsx'
import HistoryOfZftGroup from './HistoryOfZftGroup.jsx'

const DEFAULT_HISTORY_TAG = 'History of ZFT Group'

export default function BrandHistorySheet({ isOpen, onClose }) {
  const [activeTag, setActiveTag] = useState(DEFAULT_HISTORY_TAG)
  const sheetRef = useRef(null)
  const historyTags = [
    DEFAULT_HISTORY_TAG,
    'History of SEINFEL',
    'History of JEFFEL',
    'History of COFON',
  ]
  const tagContentComponents = {
    'History of ZFT Group': HistoryOfZftGroup,
    'History of SEINFEL': HistoryOfSeinfel,
    'History of JEFFEL': HistoryOfJeffel,
    'History of COFON': HistoryOfCofon,
  }
  const ActiveTagContent = tagContentComponents[activeTag]
  const isActiveContentVisible = isOpen

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('body-no-scroll')
      setActiveTag(DEFAULT_HISTORY_TAG)
      requestAnimationFrame(() => {
        if (sheetRef.current) {
          sheetRef.current.scrollTop = 0
        }
      })
    } else {
      document.body.classList.remove('body-no-scroll')
    }

    return () => {
      document.body.classList.remove('body-no-scroll')
    }
  }, [isOpen])

  return (
    <div
      className={`bottom-sheet-overlay ${isOpen ? 'is-open' : ''}`}
      onClick={onClose}
    >
        <section
          ref={sheetRef}
          className={`bottom-sheet bh-sheet ${isOpen ? 'is-open' : ''}`}
          onClick={(event) => event.stopPropagation()}
          aria-hidden={!isOpen}
        >
          <div className="bottom-sheet-header bh-sheet-header">
            <h2 className="bh-sheet-title">BRAND HISTORY</h2>
            <button
              className="bottom-sheet-close bh-sheet-close"
              type="button"
              onClick={onClose}
              aria-label="Close brand history"
            >
              <img src="/cancel.png" alt="" />
            </button>
          </div>
          <div className="history-tags bh-history-tags" role="tablist" aria-label="Brand history tabs">
            {historyTags.map((tag) => (
              <button
                key={tag}
                className={`history-tag ${activeTag === tag ? 'is-active' : ''}`}
                type="button"
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <ActiveTagContent isVisible={isActiveContentVisible} />
          <SiteFooter />
        </section>
      </div>
  )
}
