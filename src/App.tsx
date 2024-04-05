import { Routes, Route } from "react-router-dom"
import Editor from "./pages/editor"
import Preview from "./pages/preview"
import Home from "./pages/Home"
import ViewArticlePage from "./pages/view-article"
import SignIn from "./components/sign-in"
import SignUp from "./components/sign-up"
import SearchResultPage from "./pages/search-result-page"
import ProfilePage from "./pages/profile-page"
import { useSelector } from "react-redux"
import { RootState, selectAuthenticated } from "./store/slices/auth-slice"
import NavbarWithUser from "./components/navbar-with-user"
import Navbar from "./components/navbar"


function App() {
  
  const result = useSelector( (state: RootState) => selectAuthenticated(state))

  return (
    <>
    {result ? <NavbarWithUser/> : <Navbar/>}
    <Routes>
      <Route path="/editor" element={<Editor/>}/>
      <Route path="/preview" element={<Preview/>}/>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/article/:articleId" element={<ViewArticlePage/>}/>
      <Route path="/search" element={<SearchResultPage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
    </Routes>
    </>
  )
}

export default App
