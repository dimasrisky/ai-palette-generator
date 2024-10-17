import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query";
import './index.css'
import { Form, Home, Result } from './pages/Pages.jsx'


const queryClient = new QueryClient()
const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/form', element: <Form /> },
  { path: '/result', element: <Result /> }
])

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
  </QueryClientProvider>
)
