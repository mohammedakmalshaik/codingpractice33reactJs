// Write your code here
import './index.css'

const LangaugeFilterItem = props => {
  const {isActive, langaugeFilterDetails, setActiveLangaugeFilterId} = props
  const {id, langauge} = langaugeFilterDetails
  const btnClassName = isActive
    ? 'langauge-btn active-langauge-btn'
    : 'langauge-btn'
  const onClickLangaugeFilter = () => {
    setActiveLangaugeFilterId(id)
  }

  return (
    <li>
      <button
        className={btnClassName}
        onClick={onClickLangaugeFilter}
        type="button"
      >
        {langauge}
      </button>
    </li>
  )
}

export default LangaugeFilterItem
