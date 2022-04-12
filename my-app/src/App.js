import React from 'react';
import Produto from './Produto.js';
 

function App() {

  const [dados,setDados] = React.useState(null);

 async function handleClick(event){

    const apiLink ="https://ranekapi.origamid.dev/json/api/produto/";

        console.log(event.target.innerText);

     const response = await fetch(`${apiLink}${event.target.innerText}`);
     
      const json = await response.json();
      
        setDados(json);
       
        console.log(dados);

   

  }

  return (
    <div>

        <button style={{marginLeft:'500px', marginRight:'5px'}} onClick={handleClick}>smartphone</button>
        <button style={{marginRight:'5px'}} onClick={handleClick}>tablet</button>
        <button style={{marginRight:'5px'}} onClick={handleClick}>notebook</button>
        {dados && <Produto dados={dados}/>}

    </div>
  );
}

export default App;
