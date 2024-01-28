import './erro.css'
import { Link } from 'react-router-dom'


export default function Error() {
  return (
    <div className='container-error'>
        <img src="error-404.png" alt="imagem" />
        <h1>Página não encontrada!</h1>
        <Link to='/'>
            Voltar a Home
        </Link>
    </div>
  )
}
