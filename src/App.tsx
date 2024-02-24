import { Routes, Route } from "react-router-dom"
import UserAuthForm from "./pages/user-auth-form"
import Editor from "./pages/editor"
import Preview from "./pages/preview"
import Home from "./pages/Home"
import ViewArticlePage from "./pages/view-article"


function App() {
  

  return (
    <>
    <Routes>
      <Route path="/editor" element={<Editor/>}/>
      <Route path="/preview" element={<Preview/>}/>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/signin" element={<UserAuthForm type="sign-in"/>}/>
      <Route path="/signup" element={<UserAuthForm type="sign-up"/>}/>
      <Route path="/article/:articleId" element={<ViewArticlePage/>}/>
    </Routes>
    </>
  )
}

export default App
