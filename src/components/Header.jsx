import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import images from "../assets/images"
import BtnMenu from "./BtnMenu"
import CustomLink from "./CustomLink"
import MenuMobile, { itemsMenu } from "./MenuMobile"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menu = useRef()

  // Close menu if click outside
  const toggleMenu = (e) => {
    if (menu.current.contains(e.target)) {
      return
    }
    // Click outside
    setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener("mousedown", toggleMenu)

    return () => {
      document.removeEventListener("mousedown", toggleMenu)
    }
  }, [])

  return (
    <header
      className={`
        flex
        justify-between
        items-center
        mb-6
        md:mb-10
        lg:mb-20
        
			`}
    >
      <figure className="order-2 md:order-1">
        <Link to="/">
          <img
            src={images.logo}
            alt="logo del portafolio profesional de Yeferson"
          />
        </Link>
      </figure>

      {/* menu hamburger  */}
      <div className="md:hidden">
        <BtnMenu
          ariaType="expanded"
          className={`${!isOpen ? "visible" : "hidden"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={images.iconHamburger} alt="icon menu open" />
        </BtnMenu>
      </div>

      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} useref={menu} />

      {/* Menu tablet up */}
      <nav className="md:order-2">
        <ul className="hidden md:flex md:gap-x-8">
          {itemsMenu.map(([title, url]) => (
            <li key={title}>
              <CustomLink
                to={url}
                className="font-lato font-bold text-lg uppercase"
              >
                {title}
              </CustomLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
