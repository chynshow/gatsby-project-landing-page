import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPizzaSlice,
  faLeaf,
  faCarrot,
  faPlus,
} from "@fortawesome/free-solid-svg-icons"
import { graphql, useStaticQuery } from "gatsby"
import MenuSection from "./../MenuSection"

const MenuItems = ({ filter }) => {
  const {
    menuInfo: { menu },
  } = useStaticQuery(graphql`
    {
      menuInfo: menuPageJson {
        menu {
          category
          description
          filterLabel
          title
          price
        }
      }
    }
  `)

  const menuItemsFiltered =
    filter !== "" ? menu.filter(item => item.filterLabel === filter) : menu

  return (
    <div className="c-menu__items">
      <MenuSection
        title="Pizza"
        icon={
          <FontAwesomeIcon
            className="c-menu__section-icon"
            icon={faPizzaSlice}
          />
        }
        menuItems={menuItemsFiltered}
        filterLabel="Pizza"
        filter={filter}
      />
      <MenuSection
        title="Gnocchi"
        menuItems={menuItemsFiltered}
        filterLabel="Gnocchi"
        filter={filter}
      />
      <MenuSection
        title="Insalata"
        icon={
          <FontAwesomeIcon className="c-menu__section-icon" icon={faLeaf} />
        }
        menuItems={menuItemsFiltered}
        filterLabel="Insalata"
        filter={filter}
      />
      <MenuSection
        title="Antipasto"
        icon={
          <FontAwesomeIcon className="c-menu__section-icon" icon={faCarrot} />
        }
        menuItems={menuItemsFiltered}
        filterLabel="Antipasto"
        filter={filter}
      />
      <MenuSection
        title="Dodatki"
        icon={
          <FontAwesomeIcon className="c-menu__section-icon" icon={faPlus} />
        }
        menuItems={menuItemsFiltered}
        filterLabel="Dodatki"
        filter={filter}
      />
    </div>
  )
}

export default React.memo(MenuItems)
