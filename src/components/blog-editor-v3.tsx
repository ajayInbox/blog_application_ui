import "../index.css"
import Image from '@tiptap/extension-image'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { Heading2, Heading3, List, Image as ImageIcon, Strikethrough, Bold, Italic } from 'lucide-react'

import {
  BubbleMenu,
  Content,
  EditorContent,
  FloatingMenu,
  useEditor,
} from '@tiptap/react'

type TiptapProps = {
  content: Content,
  setContent: React.Dispatch<React.SetStateAction<Content>>
}


const Tiptap = ({content, setContent}: TiptapProps) => {

  const editor = useEditor({
    editorProps: {
        attributes: {
            class: 'prose prose-2xl focus:outline-none p-2 max-w-[900px] w-full'
        }
    },
    extensions: [

      StarterKit,

      Placeholder.configure({
        showOnlyWhenEditable: false,
        emptyEditorClass:'cursor-text before:content-[attr(data-placeholder)] before:absolute before:top-2 before:left-2 before:text-mauve-11 before:opacity-50 before-pointer-events-none',
        placeholder: 'Write Something'
      }),

      Image.configure({
        HTMLAttributes: {
            class: "my-image"
        }
      }),
    ],

    onUpdate: ({ editor }) => {
        window.localStorage.setItem('editor-content', editor.getHTML())
        setContent(editor.getHTML())
    },
    content: content
  })

   const addImage = () => {
    const url = window.prompt('URL')

    if (url && editor) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }


  return (
    <>
      {editor && <BubbleMenu className="bubble-menu" 
      tippyOptions={{ duration: 100 }} 
      editor={editor}>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <Bold size={24} className='bubble-menu-btn' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <Italic size={24} className='bubble-menu-btn' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          <Strikethrough size={24} className='bubble-menu-btn' />
        </button>
      </BubbleMenu>}

      {editor && <FloatingMenu className="floating-menu flex items-center bg-white text-dark-grey py-1.5 " 
      tippyOptions={{ duration: 100 }} editor={editor}>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
         <Heading2 size={30} className='px-1.5'/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          <Heading3 size={30} className='px-1.5' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <List size={30} className='px-1.5' />
        </button>
        <button onClick={addImage}>
          <ImageIcon size={30} className='px-1.5' />
        </button>
      </FloatingMenu>}

      <EditorContent editor={editor} />
    </>
  )
}

export default Tiptap