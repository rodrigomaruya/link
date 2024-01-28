/* eslint-disable react/prop-types */

import './link.css'
import {FiClipboard,FiX} from 'react-icons/fi'


export default function LinkItem({closeModal,linkEncurtado}) {
  
  async function copyLink(){
    await navigator.clipboard.writeText(linkEncurtado.link)
    alert('Link copiado com sucesso')
    
    
  }

  return (
    <div className='modal-container'>
        <div className='modal-header'>
            <h2>Link Encurtado</h2>
            <button onClick={closeModal}>
                <FiX size={28} />
            </button>
        </div>
            <span>
               {linkEncurtado.long_url}
            </span>

            <button className='modal-link' onClick={copyLink}>
                {linkEncurtado.link}
                <FiClipboard size={28} />
            </button>
    </div>
  )
}
