import CustomLink from "./CustomLink"
import images from "../assets/images"
import BtnMenu from "./BtnMenu"

export const itemsMenu = [
  ["Sobre mí", "/"],
  ["Proyectos", "/projects"],
  ["Contáctame", "/contact"],
]

const MenuMobile = ({ setIsOpen, isOpen, useref }) => {
  return (
    <>
      <nav
        className={`md:hidden fixed top-0 shadow-md shadow-light bottom-0 left-0 right-3/4 w-10/12 bg-primary  items-center   flex
        ${isOpen ? "flex opacity-95" : "hidden"}`}
        ref={useref}
      >
        <BtnMenu
          className="absolute right-3 top-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={images.closeMenu} alt="" />
        </BtnMenu>

        <ul
          className={`flex flex-col justify-center items-center  basis-full gap-10 `}
        >
          {itemsMenu.map(([title, path]) => (
            <li key={title}>
              <CustomLink
                to={path}
                className="font-bold font-lato uppercase text-3xl"
              >
                {title}
              </CustomLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default MenuMobile
