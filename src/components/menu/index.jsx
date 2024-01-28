import "./menu.css"
import {BsYoutube, BsInstagram} from "react-icons/bs"

import { Link } from "react-router-dom"

export default function Menu() {
  return (

    <div className="menu">
        <a className="social" href="#">
            <BsYoutube size={24} color="black"/>
        </a>
        <a className="social" href="#">
            <BsInstagram size={24} color="black"/>
        </a>
        <Link to='/links' className="menu-item">
            Meus Links
        </Link>
        <Link to='/qrcode' className='menu-item'>
            Gerar QRcode
        </Link>
    </div>
  )
}
