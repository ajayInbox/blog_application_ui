import BlogEditorV1 from '../components/blog-editor-v1'
import { Toaster } from 'react-hot-toast'

export default function editor() {
  return (
    <div>
      <Toaster/>
        <BlogEditorV1/>
    </div>
  )
}
