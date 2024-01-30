import {FiLink} from 'react-icons/fi'
import './home.css'
import Menu from '../../components/menu'
import { useState } from 'react'
import LinkItem from '../../components/LinkItem'
import api from '../../services/api'
import {saveLink} from '../../services/storeLinks'


export default function Home() {

    const [link,setLink]=useState('')
    const [showModal,setShowModal]=useState(false)
    const [data,setData]=useState({})

    
    async function handleShortLink(){
        try{
            const response =await api.post('/shorten',{
                long_url:link
            })
            setData(response.data)
            console.log(response.data)
            setShowModal(true)
            saveLink("@encurtaLink",response.data)
            setLink('')
        }catch{
            alert('Ops parece que algo deu errado')
        }
    }
   
    return(
        <div className="container-home">
            <div className="logo">
                <img src="/link.PNG" alt="Logo" />
                <h1>Encurtador de Link</h1>
                <span>Cole seu link para encurtar 👇</span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={24} color=""/>
                    <input type="text" name="" id="" placeholder='Cole seu link aqui...' value={link} onChange={(e)=>setLink(e.target.value)} />
                </div>
                    <button onClick={handleShortLink}>Encurtar link</button>
            </div>
            <Menu/>

            {showModal &&(
                <LinkItem
                closeModal={()=>setShowModal(false)} linkEncurtado={data}/>
            )}
            
        </div>
    )
    
}



