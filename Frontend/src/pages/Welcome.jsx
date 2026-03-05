import { useNavigate } from "react-router-dom"
import "../styles.css"

function Welcome(){

  const navigate = useNavigate()
  const username = localStorage.getItem("username")

  const logout = ()=>{
    navigate("/")
  }

  return(

    <div className="container welcome">

      <h1>Welcome {username}!!</h1>

      <p>You have successfully logged in.</p>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>

    </div>

  )

}

export default Welcome