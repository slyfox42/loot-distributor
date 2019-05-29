import { NO_QUALITY_CATEGORIES } from '../../../constants'
import Item from '../../atoms/SelectableItem'
import PropTypes from 'prop-types'
import QualityDropdown from '../../atoms/QualityDropdown'
import React from 'react'

const ItemDisplayList = ({ itemList, onClick, customClass, askForQuality }) => {
  const items = itemList.map((el, idx) =>
    askForQuality && !NO_QUALITY_CATEGORIES.includes(el.category) ? (
      <QualityDropdown
        key={`${el.objectID}-${idx}`}
        idx={idx}
        onClick={onClick}
      >
        <Item item={el} customClass={customClass} />
      </QualityDropdown>
    ) : (
      <Item
        key={`${el.objectID}-${idx}`}
        item={el}
        onClick={onClick}
        customClass={customClass}
      />
    )
  )

  return <div className="list">{items}</div>
}

ItemDisplayList.propTypes = {
  itemList: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  customClass: PropTypes.string,
  askForQuality: PropTypes.bool
}

ItemDisplayList.defaultProps = {
  askForQuality: false,
  customClass: ''
}

export default ItemDisplayList
