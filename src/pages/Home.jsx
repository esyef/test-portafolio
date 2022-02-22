import { Link, Outlet } from "react-router-dom"
import images from "../assets/images"
import CallToAction from "../components/CallToAction"

const Home = () => {
  return (
    <>
      <section className="mb-24 lg:m-0">
        <div className="md:relative lg:flex ">
          <figure>
            <picture>
              <img
                sizes="(max-width: 1400px) 100vw, 1400px"
                srcSet={`  ${images.hero200} 200w, ${images.hero1400} 1400w `}
                src={images.hero1400}
                alt="ilustration development"
                className="w-96 mx-auto  mb-6 md:w-full lg:text-right lg:w-8/12 lg:mr-0.5"
              />
            </picture>
          </figure>

          <div className="flex flex-col relative gap-8 md:absolute md:bottom-1 lg:bottom-6 bg-gradient-to-tr md:from-cyan-900 md:to-emerald-700 md:pt-8 md:w-1/2">
            <h1 className="font-roboto text-4xl text-light font-bold w-10/12 lg:text-6xl lg:w-full">
              Hola 👋, Soy Yeferson y me gusta construir páginas web.
            </h1>
            <div>
              <a
                href="#sobre-mi"
                className="
                text-light 
                text-xs  md:text-2xl uppercase 
                font-lato tracking-wider 
                bg-green-600 py-4  
                px-8 inline-block rounded-md"
              >
                {" "}
                sobre mí{" "}
              </a>
            </div>
          </div>
        </div>
      </section>

      <main
        id="sobre-mi"
        className="mb-32 md:flex md:items-end md:gap-x-8  md:mb-24 lg:gap-x-36 lg:items-center"
      >
        <figure className="md:basis-1/2 lg:basis-auto">
          <picture>
            <img
              sizes="(max-width: 580px) 100vw, 580px"
              srcSet={`
    				${images.avatar200} 200w,
    				${images.avatar333} 333w,
    				${images.avatar431} 431w,
    				${images.avatar520} 520w,
    				${images.avatarw580} 580w,
    			`}
              src={images.avatarw580}
              alt="Avatar Yeferson Olarte Roncancio"
              className="w-96 mx-auto mb-6 rounded-b-2xl  md:m-0 lg:w-full"
            />
          </picture>
        </figure>
        <div className="md:basis-2/3 ">
          <h2 className="text-4xl text-light capitalize font-roboto font-bold mb-7">
            {" "}
            sobre mí{" "}
          </h2>

          <p className="text-light leading-loose font-lato mb-10 ">
            Soy un desarrollador front-end junior que busca un nuevo rol en una
            empresa emocionante. Me gusta escribir HTML semántico, usando
            prácticas modernas de CSS y escribiendo Javascript limpio. Cuando
            escribo código javascript uso Reactjs Vivo en la ciudad de Bogotá,
            Colombia{" "}
            <img
              src={images.flagColombia}
              alt="Icono bandera colombia"
              width="18"
              className="inline"
            />
            , estoy cursando la carrera profesional de ingenerpia de sistemas.
            Me gustaría que vieras mi trabajo.
          </p>

          <div>
            <Link
              to="/projects"
              className="
            text-green-500 
            text-xs uppercase 
            font-lato tracking-wider 
            border-2 border-green-500 py-4  
            px-8 inline-block rounded-md"
            >
              {" "}
              ver proyectos
            </Link>
          </div>
        </div>
      </main>

      <CallToAction />

      <Outlet />
    </>
  )
}

export default Home
