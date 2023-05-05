import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage } from "../../pages"
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary"
import Header from "../Header/Header"
import 'boxicons'

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
    </Router>
  )
}

export default App