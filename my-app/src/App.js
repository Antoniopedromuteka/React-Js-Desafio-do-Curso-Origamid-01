import React from 'react';
import Produto from './Produto.js';
 

function App() {

  const [dados,setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

 async function handleClick(event){
    setCarregando(true);
    const apiLink ="https://ranekapi.origamid.dev/json/api/produto/";

        console.log(event.target.innerText);

     const response = await fetch(`${apiLink}${event.target.innerText}`);
     
      const json = await response.json();
      
        setDados(json);
       
        console.log(dados);

     setCarregando(false);

  }

  return (
    <div>

        <button style={{marginLeft:'500px', marginRight:'5px'}} onClick={handleClick}>smartphone</button>
        <button style={{marginRight:'5px'}} onClick={handleClick}>tablet</button>
        <button style={{marginRight:'5px'}} onClick={handleClick}>notebook</button> 
        {carregando && <p>carregando...</p>}
        {!carregando && dados && <Produto dados={dados}/>}
     

    </div>
  );
}

export default App;
