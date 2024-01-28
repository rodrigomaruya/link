import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import  Link  from './pages/Links'
import Error from './pages/Erro'
import Qrcode from './pages/QRcode'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/links' element={<Link/>}></Route>
                <Route path='*' element={<Error/>}></Route>
                <Route path='/qrcode' element={<Qrcode/>}></Route>
            </Routes>
        </BrowserRouter>
    )

}

export default RoutesApp