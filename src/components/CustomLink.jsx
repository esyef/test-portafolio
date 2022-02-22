import { Link, useMatch, useResolvedPath } from "react-router-dom"

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })
  return (
    <Link to={to} {...props} style={{ color: match ? "#4ade80" : "#FEFEFE" }}>
      {children}
    </Link>
  )
}

export default CustomLink
