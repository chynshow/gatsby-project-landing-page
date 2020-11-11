import React from "react"
import Title from "../../Common/Title"
import MenuItem from "./../MenuItem"

const MenuSection = ({ icon, menuItems, title, filterLabel, filter }) => {
  return (
    <>
      {menuItems.filter(item => item.category === filterLabel).length > 0 && (
        <Title className="c-menu__section-title">
          {title}
          {icon}
        </Title>
      )}
      <div className="c-menu__sections">
        {menuItems
          .filter(item => item.category === filterLabel)
          .map((pizza, idx) => (
            <MenuItem key={idx} data={pizza} filter={filter} />
          ))}
      </div>
    </>
  )
}

export default MenuSection
