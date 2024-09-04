import { useState } from "react"
import Header from "./components/Header";
import NumeroSorteado from "./components/NumeroSorteado"
import CampoTexto from "./components/CampoTexto";
import Botao from "./components/Botao";
import ListaDeNumSort from "./components/ListaDeNumSort";
import BoxSort from "./components/BoxSort";


function App() {

  const [numberSort1,setNumberSort1] = useState('')
  const [numberSort2,setNumberSort2] = useState('')
  const [numb, setNumb] = useState('') 

  const [numbrsSort, setNumbrsSort] = useState([])

  const sortear = ()=>{ 
    const randomNumber = (Math.floor(Math.random() * (Math.floor(numberSort2 ) - Math.ceil(numberSort1) + 1) + Math.ceil(numberSort1)))
    setNumb(randomNumber)
    //setNumb(Math.floor(Math.random() * (numberSort2 - numberSort1 ) + numberSort1 )) 
    setNumbrsSort([...numbrsSort,randomNumber])
  }
  return (
    <div className="App">
      <Header/>
      <section className="limite">
      <BoxSort>
      <CampoTexto h2 ="Sortear De" valor={numberSort1} aoAdicionar={valor => setNumberSort1(valor)} tipo="number"/>
      <CampoTexto h2= "Até" valor={numberSort2} aoAdicionar={valor => setNumberSort2(valor)} tipo="number"/>
      <Botao aoClicar={sortear}>Sortear</Botao>
      
      <NumeroSorteado valor ={numb}/>
      {numbrsSort.map((num, index) =><ListaDeNumSort key={index} NumJaSort={num} ordem={index + 1}/> )}
      </BoxSort>
      </section>
      
    </div>
  );
}

export default App;
