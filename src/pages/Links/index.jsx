import './links.css'
import { useState,useEffect } from 'react'
import {FiArrowLeft,FiLink,FiTrash} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { getLinksSalve,linkDelete } from '../../services/storeLinks'
import LinkItem from '../../components/LinkItem'

export default function Links() {
  const [linksEmpty,setLinksEmpty]=useState(false)
  const [myLinks,setMyLinks]=useState([])
  const [showModal,setShowModal]=useState(false)
  const [data,setData]=useState({})



  useEffect(()=>{
    async function getLink(){
      const result = await getLinksSalve('@encurtaLink')
      console.log(result)
      
      if(result.length===0){
        console.log('Nenhuma chave')
        setLinksEmpty(true)
      }
      setMyLinks(result)
      console.log(result)
    }
    getLink()
  
  },[])

  function handleClick(key){
    setShowModal(true)
    setData(key)
  }
   async function handleDelete(link){
    const result= await linkDelete(myLinks,link)
    if(result.length===0){
      console.log('Você não tem links')
      setLinksEmpty(true)
    }
    setMyLinks(result)
    
    
  }

  return (
  

    <div className='links-conteiner'>
      <div className='links-header'>
        <Link to="/">
          <FiArrowLeft size={38} />
        </Link>
        <h1>Meus Links</h1>
      </div>

      {linksEmpty &&(
        <div className='linkEmpty'>
          <h2>Sua lista esta vazia...</h2>
        </div>
      )}

    {myLinks.map(link=>(
      <div key={link.id} className='links-item'>
      <button className='links' onClick={()=>handleClick(link)}>
          <FiLink size={18}/>
          {link.long_url}
      </button>
      <button className='links-delete' onClick={()=>{handleDelete(link.id)}}>
          <FiTrash size={24}/>
          
      </button>
    </div>
    ))}
      
      {showModal &&(
        <LinkItem
        closeModal={()=>setShowModal(false)}
        linkEncurtado={data}
        />
      )}
    
      

      
      

     

    </div>


   
    
    
  )
}
