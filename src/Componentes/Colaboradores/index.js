import './Colaboradores.css'

/* Guardando na respectiva variável os seguintes parâmetros. */
const Colaborador = ({ nome, imagem, cargo, corCard}) => {

    return (

        <li className='lista-colaboradores'>
            <div className='colaborador'>

                <div className='cabecalho' style={{background : corCard}}>
                    <img src={imagem} alt={nome} />
                </div>
                <div className='rodape'>
                    <h4>{nome}</h4>
                    <h5>{cargo}</h5>
                </div>

            </div>
        </li>

    )

}

export default Colaborador