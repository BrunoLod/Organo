import Colaborador from '../Colaboradores';
import './Times.css';


const Times = (props) => {


    return (

        /* 
        
        Criando um condicional que me retorna os times, 
        caso eles apresentam um valor de array maior que 0, 
        ilustrando a presença do card de algum colaborador. 
        
        */

        props.colaboradores.length > 0 &&
        <section className='time'>
            <h3 style={{ borderBottomColor: props.corDosCards }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corCard={props.corDosCards} key={colaborador.nome} nome={colaborador.nome}
                    cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>

    )

}

export default Times