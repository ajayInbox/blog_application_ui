import { Routes, Route } from "react-router-dom"
import Editor from "./pages/editor"
import Preview from "./pages/preview"
import Home from "./pages/Home"
import ViewArticlePage from "./pages/view-article"
import SignIn from "./components/sign-in"
import SignUp from "./components/sign-up"
import SearchResultPage from "./pages/search-result-page"
import ProfilePage from "./pages/profile-page"


function App() {
  

  return (
    <>
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
