import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query";
import './index.css'
import Form from './pages/Form.jsx'
import Result from './pages/Result.jsx'

const queryClient = new QueryClient()
const router = createBrowserRouter([
  { path: '/', element: <Form /> },
  { path: '/result', element: <Result /> }
])

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
  </QueryClientProvider>
)
