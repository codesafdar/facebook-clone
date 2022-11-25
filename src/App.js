import Login from "./auth/login/Index";
import { useRoutes } from "react-router-dom"

const App = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Login />
    }
  ])
  return element
}

export default App