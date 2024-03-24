
import React, { useState } from 'react';
import './App.css';
import Banner from './Componentes/Banner/Banner';
import Formulario from './Componentes/Formulario';
import Times from './Componentes/Times';
import Footer from './Componentes/Footer/Footer';

// Entendendo o código: 

{/* 

Irei adicionar tanto aqui quanto em outras partes 
minhas anotações sobre o código / explicações, com o objetivo
de entendê-lo e, assim, aprender. 

*/}

{/* 

Aqui estou importando o css do App.js, bem como 
os componentes Reacts que formam a página. Além disso, 
estou importando um pacote React, o useState, que se
trata de um "hook", utilizado para adicionar estado 
a componente de função do React. Ele permite que eu 
adicione estado a um componente sem a necessidade de
ter de o transformar em uma classe. 

A função useState retorna dois valores, sendo o estado 
e o setEstado, sendo algum valor inicial qualquer atribuido 
ao estado, a qual é sobreescrita por meio do setEstado

Mas o que são os estados ? 

Os estados são a forma como estão (ou está) os dados 
em um determinado instante. Nesse sentido, quando utilizo
de tal função assumo que irei precisar armazenar os dados 
em uma forma e tempo, permitindo que esse, porém, possa
ser alterado pelo usuário conforme o seu desejo. 

*/}

function App() {

  {/* 
  
  Utilizando useState para criar uma variável estado, "colaboradores", 
  que no primeiro momento assume valor de um array vazio, seguido
  pelo "setColaboradores", que permite sobrescrever novas entradas
  na aplicação, conforme o interesse do usuário. 

  Podemos compreender que o primeiro - que é o estado - é o que é lido
  ou lê, enquanto que o segundo é o que escreve o novo estado do 
  objeto que foi passado na entrada pelo usuário. 

  */}

  {/* 

  Para fins dessa aplicação, desejo que mediante ao 
  input de informações de usuário, essas sejam armazenadas
  e produzam uma alteração no estado da aplicação, produzindo
  novos efeitos. 
        
  Em termos de contexto, as informações contraídas
  via input objetivam criar o nome do membro do time, 
  seu breve resumo, o time a que pertence e sua foto. 
    
  Para isso, eu precisso criar um hook que interliga 
  a entrada do usuário com a variável interna da aplicação. 
  
  */}

  // Criando o hook:

  {/* 

    Cria o hook por meio do useState, sendo o prefixo "use", 
    uma referência ao Hook. Ele cria duas variáveis que são 
    armazenadas num array - matriz -, sendo uma para a leitura, 
    valor, e outra para escrever, setValor. 

  */}


  const [colaboradores, setColaboradores] = useState([])

  {/* 

  Função recebe um colaborador como entrada, imprimindo-o no 
  console para depuração, utilizando a função setColaboradores, 
  proveniente do useState, para atualizar o estado de colaboradores, 
  adicionando um novo colaborador na lista. 
  
  */}

  const colaboradorAdicionado = (colaborador) => {

    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])

  }


  const times = [
    {
      nome: 'Programação',
      corTime: '#133B51 ',
    },
    {
      nome: 'Front-End',
      corTime: '#35B6FE',
    },
    {
      nome: 'Data Science',
      corTime: '#1EE0B1',
    },
    {
      nome: 'Devops',
      corTime: '#F34441',
    },
    {
      nome: 'UX e Design',
      corTime: '#EE22CE',
    },
    {
      nome: 'Mobile',
      corTime: '#FFBA05',
    },
    {
      nome: 'Inovação e Gestão',
      corTime: '#FF8A29',
    },
    {
      nome: 'Inteligência Artificial',
      corTime: '#7B71FF',
    }
  ]

  {/* 
  
  Esse trecho representa a renderização do componente App. 
  Cria um elemento "<div>" com um nome de classe "App", por meio da 
  qual, posteriormente, permitirá estilizá-la via css. 
   
  Da mesma forma, renderiza o componente <Banner/> e <Formulario/>, 
  ambos componentes React. No componente Formulario há uma prop, que 
  significa properties, ou propriedades, sendo no caso o "colaboradorCadastrado", 
  cuja função é atualizar o estado de colaboradores, por meio da função
  colaboradorAdicionado.  

  */}

  return (

    <div className="App">
      <Banner />
      <Formulario
        nomesDosTimes={times.map(time => time.nome)}
        colaboradorCadastrado={colaborador => colaboradorAdicionado(colaborador)} />

      {/* 
      
      Criando uma "tag" Times por meio  da qual eu crio 
      o conjunto dos times, sem que eu precise manualmente 
      criar os times um a um, segundo esse formato:
      
      <Times>
            Programação
      <Times/>

      A criação dos times, desse modo, é realizado por meio do 
      método map, que mapeia os elementos presentes em times, 
      um array composto por dicionário, iterando cada elemento, 
      na medida em que cada iteração é passada para o termo "time", 
      o primeiro termo após o "(", que se trata de uma fução de callback
      posta num formato de arrow function, a qual se refere ao 
      componente React "Times". 
      
      O componente "Times" é então renderizado para cada elemento do array
      "times", definido acima. 

      Entendendo uma função de callback:

      A função de callback se refere a uma função que "o seu nome" é 
      passado como argumento para uma função, ao mesmo tempo que
      armazena a sua saída, podendo ser chamado novamente para uma
      atualização de novas entradas com as quais, posteriormente, 
      o componente react poderá renderizar a informação.  

      Entendendo os demais parâmetros:

      key :   chave que armazena o nome de cada time. Trata-se de uma 
              medida de diferenciação para cada time, que será salutar 
              para a manipulação desses, informando ao React quando 
              atualizar um time, renderizando-o e afins. Ela é passada
              ao componente Times.  

      nome :  A propriedade nome é passado ao componente Times, mediante à iteração 
              inicialmente realizada pelo método map, que "armazena", através
              do mapeamento do array, o valor de cada elemento em que passou 
              inclusive a variável nome, referente aos nomes de cada time. 

      corDosCards: propriedade que armazena a cor de cada time, as quais são 
                   passadas posteriormente ao componente React, para que 
                   renderize cada time com a sua respectiva cor. 
      
      */}

      

      {times.map(time => <Times
        key={time.nome}
        nome={time.nome}
        corDosCards={time.corTime} 

        /*
        
        O trecho abaixo filtra os colaboradores 
        com base no nome do time, retornando apenas
        aqueles cujo time é iguao ao nome especificado. 
        
        Entendendo o código:
        
        O filter é um método array em JavaScript que cria 
        um novo array com todos os elementos que passaram num 
        teste implementado pela função fornecida, retornando apenas
        os elementos que atenderam determinada condição. 
        
        O teste implementado é sobre se o time do colaborador
        é equivalente ao nome do time, que, se for, retorna
        o time, que será armazenado na variável colaboradores. 
        
        */

        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} />)}

        <Footer/>
        
    </div>
  );
}

export default App;
