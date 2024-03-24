import React, { useState } from 'react';
import './TextField.css';

const TextField = (props) => {


    {/* 
    
    Para concatenar elementos no placeholder,
    basta fazer o que jaz abaixo. */}

    // const placeholderModificado = `${props.placeholder}...`

    const placeholder = props.placeholder


    {/* 

    Escuta o evento, que é a entrada do usuário, 
    chamando a função "aoAlterado" via props, que 
    envolve os parâmetros evento, target e value, 
    para saber o valor da entrada, o que está sendo 
    passado pelo usuário. 

    */}

    const aoDigitado = (evento) => {

        props.aoAlterado(evento.target.value)
    }

    {/* 

    Renderizando o campo de texto, que estará 
    circunscrito pelo formulário. 

    */}

    return (

        <div className="text__field">

            {/* 
            
            Fornece o rótulo dos itens de cada 
            campo de entrada. 
            
            */}

            <label>
                {props.label}
            </label>

            {/* 
            
            Por meio do onChange, estou criando uma reção da aplicação 
            à entrada de informações via input, o qual executa a função
            a qual ele se refere entre chaves. 
            
            */}

            {/* 
            
            Note que estou recebendo os valores de input da seguinte forma
            abaixo. Cada variável recebe infromação provenientes do index.js 
            do componente Formulario, trazidos via "props". 
            
            */}

            {/* 
            
            value : define o valor do campo de entrada, permitindo controlar
            o estado do campo de entrada. 
            
            onChange: define uma função de chamada que será requisitada sempre
            que o conteúdo do campo de entrada for alterado pelo usuário, acionando
            a função que jaz entre chaves, a qual é construída dentro do componente 
            TextField, sendo responsável por manipular as alterações no campo de entrada. 
            
            required: definie se determinado campo é ou não obrigatório.
            
            placeholder: traz o valor do placeholder, a sua inscrição, para ser 
            renderizado na interface do usuário. 
            
            */}

            <input
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                placeholder={placeholder}
            />

        </div>
    );
}

export default TextField;
