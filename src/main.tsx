import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from "./store/index.tsx"
import  ContentContextProvider  from "./context/content-context.tsx"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <ContentContextProvider>
    <App />
    </ContentContextProvider>
    </Provider>
    </QueryClientProvider>
    </BrowserRouter>

)
