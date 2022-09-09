import './error.css'
const Error = ({children}) => {
  return (
    <div>
        <div className="notificacion">
            <p>{children}</p>
        </div>
    </div>
  )
}

export default Error