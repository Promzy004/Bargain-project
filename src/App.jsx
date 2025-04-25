import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import SignUp from "./pages/signup"
import LogIn from "./pages/signin"
import Dashboard from "./pages/dashboard"
import DashbordLayout from "./dashboardLayout"
import Tips from "./pages/tips"
import UsersProfile from "./pages/userProfile"
import Referrals from "./pages/referrals"
import Support from "./pages/support"
import Error404 from "./pages/error404"


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
            <Route path="tips" element={<Tips />}/>
            <Route path="profile" element={<UsersProfile />}/>
            <Route path="referrals" element={<Referrals />}/>
            <Route path="support" element={<Support />}/>
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
