import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {ReactQueryDevtools} from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AppContextProvider } from './context/AppContext'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3
    }
  }
})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <App />
        <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
      </AppContextProvider>
    </QueryClientProvider>
  </StrictMode>
)
