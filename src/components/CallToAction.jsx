import { Link } from "react-router-dom"

const CallToAction = () => {
  return (
    <article className="flex flex-col gap-8 items-center mb-20 md:flex-row md:justify-around md:mb-24">
      <h2 className="text-3xl text-light  font-roboto font-bold  text-center md:basis-1/2">
        ¿Trabajamos juntos en tu próximo proyecto?
      </h2>

      <Link
        to="/contact"
        className="
        text-green-500 
        text-xs uppercase 
        font-lato tracking-wider 
        border-2 border-green-500 py-4  
        px-8 inline-block rounded-md
         "
      >
        {" "}
        contáctame
      </Link>
    </article>
  )
}

export default CallToAction
