import { useState } from "react"
import { useForm } from "react-hook-form"
// import emailjs from "@emailjs/browser"
import MsgEmailSned from "../components/MsgEmailSned"
import images from "../assets/images"
import { Outlet } from "react-router-dom"

const Contact = () => {
  const [isSend, setIsSend] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const submitEmail = (data) => console.log(data)

  // Enviar correo
  // const submitEmail = (data) => {
  //   const templateId = import.meta.env.VITE_TEMPLATEID
  //   const serviceId = import.meta.env.VITE_SERVICEID
  //   const userId = import.meta.env.VITE_USERID
  //   const params = {
  //     from_name: data.firstName,
  //     from_email: data.email,
  //     message: data.mensaje,
  //   }

  //   emailjs
  //     .send(serviceId, templateId, params, userId)
  //     .then((resp) => {
  //       if (resp.status === 200) {
  //         setIsSend(!isSend)
  //         reset()
  //       }
  //     })
  //     .catch((err) => console.error(err))
  // }

  const name = "Yeferson"

  return (
    <section>
      {isSend ? (
        <MsgEmailSned username={name} />
      ) : (
        <div className="mb-20">
          <div className="mb-20 lg:flex  lg:justify-around">
            <h1 className="text-light font-roboto  text-4xl mb-4 lg:basis-1/3 lg:m-0">
              Ponerse en contacto
            </h1>
            <div className=" lg:basis-1/2 ">
              <p className="font-lato text-light leading-loose mb-4  ">
                Me encantaría saber en qué estás trabajando y cómo podría
                ayudarte. Actualmente, estoy buscando un nuevo rol en una
                empresa y estoy abierto a una amplia gama de oportunidades. Mi
                preferencia sería encontrar un puesto de trabajo remoto. Pero
                también me complace escuchar sobre oportunidades que no se
                ajusten a esa descripción. Soy una persona trabajadora y
                positiva que siempre abordará cada tarea con un sentido de
                propósito y atención a los detalles. No dude consultar mis
                perfiles en línea a continuación y ponerse en contacto mediante
                el formulario.
              </p>

              <div className="flex gap-2">
                <a href="https://github.com/YefWeb" target="_blank">
                  <figure>
                    {" "}
                    <img src={images.github} />
                  </figure>
                </a>
                <a
                  href="https://www.linkedin.com/in/yeferson-olarte-roncancio-432867171/"
                  target="_blank"
                >
                  <figure>
                    {" "}
                    <img src={images.linkedin} />
                  </figure>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:flex justify-around">
            <h1 className="text-light font-roboto  text-4xl mb-8 lg:basis-1/3">
              Contáctame
            </h1>

            <form
              className="flex flex-col gap-8 lg:basis-1/2"
              onSubmit={handleSubmit(submitEmail)}
            >
              <div>
                <input
                  type="text"
                  className={`focus:outline-none block  w-full  mb-2 bg-slate-600 px-5 py-4 focus:shadow-sm focus:shadow-green-500
                ${
                  errors.firstName &&
                  "border-pink-500 border-2 placeholder:text-pink-500 focus:shadow-none"
                }placeholder:text-lg placeholder:text-gray-400 text-lg text-gray-50 rounded-md`}
                  placeholder="Nombre"
                  {...register("firstName", {
                    required: "El nombre no puede estar vacío",
                  })}
                />

                {errors.firstName && (
                  <p className="peer-invalid:visible text-pink-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  className={`block w-full mb-2 focus:outline-none  bg-slate-600  px-5 py-4  focus:shadow-sm focus:shadow-green-500 
                ${
                  errors.email &&
                  "border-pink-500 border-2 placeholder:text-pink-500 focus:shadow-none"
                }placeholder:text-lgplaceholder:text-gray-400text-lgtext-gray-50rounded-md`}
                  placeholder="Dirección de correo"
                  {...register("email", {
                    required: "El correo electrónico no puede estar vacío",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Dirección de correo no valida",
                    },
                  })}
                />

                {errors.email && (
                  <p className="peer-invalid:visible text-pink-500 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  className={`focus:outline-none  block w-full mb-2 bg-slate-600  px-5 py-4 focus:shadow-sm focus:shadow-green-500
                 ${
                   errors.mensaje &&
                   "border-pink-500 border-2 placeholder:text-pink-500 focus:shadow-none"
                 } placeholder:text-lg  placeholder:text-gray-400 text-lg text-gray-50 rounded-md h-36 resize-none`}
                  placeholder="Deja tu mensaje"
                  {...register("mensaje", {
                    required: "El mensaje no puede estar vacío",
                  })}
                />

                {errors.mensaje && (
                  <p className="peer-invalid:visible text-pink-500 text-sm">
                    {errors.mensaje.message}
                  </p>
                )}
              </div>

              <input
                type="submit"
                value="Enviar mensaje"
                className="border-2 lg:w-1/2 lg:mx-auto  text-green-500 py-4 rounded-md lg:hover:cursor-pointer text-lg  lg:hover:border-2 border-green-500 "
              />
            </form>
          </div>
        </div>
      )}

      <Outlet />
    </section>
  )
}

export default Contact
