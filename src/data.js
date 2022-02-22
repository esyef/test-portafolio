import { imagesProjects } from "./assets/projects/images-projects"

const projects = [
  {
    name: "portafolio",
    description:
      "Mi sitio web profesional es un diseño minimalista, pero elegante el cual construí en 3 páginas que se adaptan en diferentes pantallas. Es un sitio web SPA  (single-page application ). Usa HTML, CSS y JavaScript para la construcción de la interfaz de usuario y el envío del formulario de contacto. ",
    technologies: [
      { name: "ReactJs" },
      { name: "TailwindCSS" },
      { name: "React Hook Form" },
      { name: "React Router DOM" },
      { name: "AnimateCSS" },
      { name: "EmailJS" },
    ],

    images: {
      200: imagesProjects.portfolio.portfolio200,
      422: imagesProjects.portfolio.portfolio422,
      590: imagesProjects.portfolio.portfolio590,
      738: imagesProjects.portfolio.portfolio738,
      864: imagesProjects.portfolio.portfolio864,
      982: imagesProjects.portfolio.portfolio982,
      1066: imagesProjects.portfolio.portfolio1066,
    },
  },
]

export function getProjects() {
  return projects
}
