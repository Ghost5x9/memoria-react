import EjemploPage from "./EjemploPage"
import {createBrowserRouter,Route, RouterProvider} from "react-router-dom"
import MemoriaPage from "./MemoriaPage"

const router = createBrowserRouter([
    {
        path : "/",
        element : <MemoriaPage />
    },
    {
        path : "/ejemplo",
        element : <EjemploPage />
        
    }
])

const App = () => {
    return <div>
        <RouterProvider router={router}/>
    </div>
}

export default App