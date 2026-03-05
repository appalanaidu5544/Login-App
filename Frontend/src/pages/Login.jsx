import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


function Login() {

  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    const savedUser = localStorage.getItem("username")
    if (savedUser) {
      setUsername(savedUser)
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()

    if (username === "admin" && password === "admin") {
      localStorage.setItem("username", username)
      navigate("/welcome")
    } else {
      setError("Invalid credentials")
    }
  }

  return (

    <div className="container">

      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>

      </form>

      {error && <p className="error">{error}</p>}

    </div>

  )

}

export default Login