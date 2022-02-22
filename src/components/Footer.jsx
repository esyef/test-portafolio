const year = new Date().getFullYear()

const Footer = () => {
  return (
    <footer
      className="	
      shadow-sm shadow-light
      p-10
			flex
			flex-wrap 
			justify-center 
			items-center
			text-center text-light"
    >
      <p className="block">
        {" "}
        Desarrollado con 💚 por Yeferson <span className="block">
          {" "}
          {year}{" "}
        </span>{" "}
      </p>
    </footer>
  )
}

export default Footer
