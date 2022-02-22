import images from "../assets/images"
// import "animate.css"

const MsgEmailSned = ({ username }) => {
  return (
    <article className="animate__animated animate__zoomIn mb-20">
      <p className="font-lato text-light text-2xl text-center mb-8 md:w-1/2 md:mx-auto">
        {username}, tu mensaje fue enviado 🙂 Te responderé lo antes posible.
      </p>
      <img
        src={images.msg}
        className="w-1/2 mx-auto rounded-md bg-slate-300 lg:w-1/3"
      />
    </article>
  )
}

export default MsgEmailSned
