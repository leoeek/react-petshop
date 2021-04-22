import React from 'react'
import imagem from '../assets/img/doguito.svg'
import '../assets/css/404.css'

const Pagina404 = () => {
    return (
        <main className="container flex flex--centro flex--coluna">
            <img src={imagem} alt="" className="doguito-imagem" alt="Ilustração do doguito" />
            <p className="naoencontrado-texto">
                Ops, Essa página não existe!
            </p>
        </main>
    )
}

export default Pagina404