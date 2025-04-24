import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import SignUp from "./pages/signup"
import LogIn from "./pages/signin"
import Dashboard from "./pages/dashboard"
import DashbordLayout from "./dashboardLayout"


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<SignUp />}/>
          <Route path="/login" element={<LogIn />}/>

          {/* Routes with sidebar and navbar */}
          <Route path="/" element={<DashbordLayout />}>
            <Route path="dashboard" element={<Dashboard />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
