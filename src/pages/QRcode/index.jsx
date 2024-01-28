import './qrcode.css'
import {FiArrowLeft,FiLink} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { useState } from 'react'




export default function Qrcode(){
    const [qrcode,setQrcode]=useState()
    const [link,setLink]=useState('')
    const [pegarQr,setPegarQr]=useState('vite.svg')
    const [loading,setLoading]=useState(false)
    
    
    async function handleQrcode(){
        setQrcode('')
        setPegarQr('vite.svg')

        try{
            const response=await api.post('/bitlinks',{
                long_url:link,
            })
            
            setQrcode(response.data.id)
            setLoading(true)
            
        }catch{
        
            alert('Ops deu Erro')
            
        }
       
    }
    async function createQr(){
        try{
            const res= await api.get(`/bitlinks/${qrcode}/qr`)
            console.log(res.data.qr_code)
            setPegarQr(res.data.qr_code)
            // setb1("none")
            // setb2("block")
            setLink('')
            
        }catch{
            alert('erro')
        }
    }
    if(loading){
        createQr()
    }
    return(
        <div className='conteiner_qrcode'>
            <div className='head_qrcode'>
            <Link to="/">
                <FiArrowLeft size={40}/>
            </Link>
                <h1>Gerar QRcode</h1>
            </div>
                <span>Cole seu link para gerar QRcode 👇</span>
           <div className="area-qrcode">
                <div>    
                    <FiLink size={24} color=""/>
                    <input type="text" name="" id="" placeholder='Cole seu link aqui...' value={link}  onChange={(e)=>setLink(e.target.value)}/>
                </div>
                    <button  onClick={handleQrcode}>Gerar QRcode</button>
            </div>

            <div className='qrcode'>
                <h3>Bitlink: {qrcode}</h3> 
                <img src={pegarQr} alt="qrcodeImagem" />
                
            </div>
        </div>
    )
}