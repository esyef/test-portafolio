import BtnMenu from "../components/BtnMenu"

const Project = ({ project }) => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-10 md:items-center">
      <figure className="shadow-sm shadow-light mb-8 md:m-0">
        <picture>
          <img
            sizes="(max-width: 1066px) 100vw, 1066px"
            srcSet={`
        ${project.images[200]} 200w,
        ${project.images[590]} 590w,
        ${project.images[738]} 738w,
        ${project.images[864]} 864w,
        ${project.images[982]} 982w,
        ${project.images[1066]} 1066w,
        `}
            src={project.images[1066]}
            alt="Proyecto portafolio de Yeferson Olarte Roncancio"
            className="w-full h-96"
          />
        </picture>
      </figure>

      <section>
        <div className="mb-4">
          <h2 className="font-roboto font-bold text-4xl capitalize text-light mb-4">
            {project.name}
          </h2>

          <p className="font-lato text-xl text-gray-300 mb-2 leading-8">
            {project.description}
          </p>

          <div className="tech">
            {project.technologies.map((element, i) => (
              <span key={i} className="text-emerald-400">
                {" "}
                {`${element.name}`}
              </span>
            ))}
          </div>
        </div>

        <div className="flex  md:items-center gap-x-8">
          <BtnMenu
            className=" text-green-500 text-xs  px-8 py-3 font-lato tracking-wider border-2 border-green-500  inline-block rounded-md text-center"
            href="https://github.com/"
            target="_blanck"
          >
            Ver código
          </BtnMenu>

          <BtnMenu
            className="text-light px-8 py-3
            text-xs  
            font-lato tracking-wider
            border-2 border-green-600
            bg-green-600 inline-block rounded-md text-center"
          >
            Ver proyecto
          </BtnMenu>
        </div>
      </section>
    </div>
  )
}

export default Project
