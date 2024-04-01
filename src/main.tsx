import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from "./store/index.tsx"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TagResultContextProvider from './context/tags-context.tsx'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(

    
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Provider store={store}>
    <TagResultContextProvider>
    <App />
    </TagResultContextProvider>
    </Provider>
    </BrowserRouter>
    </QueryClientProvider>
    

)
