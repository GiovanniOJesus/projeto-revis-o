import { Link } from "react-router-dom"

function Home() {
    
    return (
       
        <div>
             <h1>Página do Home</h1>
             <Link to={'/Joao'}>Ir para Joao</Link>
        </div>
        
    )
}

    export default Home