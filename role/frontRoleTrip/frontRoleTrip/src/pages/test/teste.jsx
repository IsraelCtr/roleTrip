import { useRef,useEffect,useState } from 'react';
import airplane from '../../assets/airPlane.svg';
import './style.css';
import { Link } from 'react-router-dom';
import api from '../../services/api.js';

function TestePagina() {
  let [viajantes,SetViajantes] = useState([])

  const inputNome = useRef()
  const inputIdade = useRef()
  const inputNacionalidade = useRef()
  const inputDataPartida = useRef()
  const inputDestino = useRef()
  const inputMalaDespacho = useRef()
  const inputMalaDeMao = useRef()
  const inputMochilaPessoal = useRef()
  

async function pegandoUsuarios(){
  const viajantesApi = await api.get('/viajantes')
  SetViajantes (viajantesApi.data) 
};
async function cadastrarViajante(){

  const viajante = {
    nome: inputNome.current.value,
    idade: inputIdade.current.value,
    nacionalidade: inputNacionalidade.current.value,
    dataDeViagem: inputDataPartida.current.value,
    destino: inputDestino.current.value,
    mala: {
      malaDeDespacho: [inputMalaDespacho.current.value, 'kg'],
      malaDeMao: [inputMalaDeMao.current.value, 'kg'],
      malaPessoal: inputMochilaPessoal.current.value
    }
  }
  await api.post('/viajantes', viajante)
  pegandoUsuarios()
}
useEffect(() => {
  pegandoUsuarios()
 },[] )

  return (
    <div className='containerFormuilario'>
      <form onSubmit={cadastrarViajante}>
        <Link to="/Home">
          <img src={airplane} alt="Ícone de avião"  className='aviao' />
        </Link>
        <h1>Infromações da viagem </h1>
        <p className='titulocad'>Passajeiros</p>
        <input className='formulario' type="" ref={inputNome} />
        
        <p className='titulocad'>idade</p>
        <input className='formulario' type="number" ref={inputIdade} />

        <p className='titulocad'>Nacionalidade</p>
        <input className='formulario' type="text" ref={inputNacionalidade} />
                  
        <p className='titulocad'>Data da viagem</p>
        <input className='formulario' type="date" ref={inputDataPartida} />
        
        <p className='titulocad'>Destino</p>
        <input className='formulario' type="text" ref={inputDestino} />

        <h2 className='titulocad'>Malas</h2>
        
        <p className='titulocad'>Mala de despacho</p>
        <p className='titulocad'>Quantas?</p>
        <input className='formulario' type="number" ref={inputMalaDespacho} />
                                                  
        <p className='titulocad'>Mala de mão</p>
        <p className='titulocad'>Quantas?</p>
        <input className='formulario' type="number" ref={inputMalaDeMao} />

        <p className='titulocad'>Mochila pessoal:</p>
        <input className='formulario' type="number" ref={inputMochilaPessoal} />                                                           
      </form>
      <button id='btn' type="submit" form="form" onClick={cadastrarViajante}>Cadastrar</button>
      <h1 id='tituloPassajeiros'>Passajeiros </h1>
        <div className='viajantesContainer'> 
    
      {viajantes.map((viajante) => (

        <div key={viajante._id || viajante.id} >
          <div className='viajantelista'>
           <p>Nome: <span>{viajante.nome}</span></p>
            <p>Idade: <span>{viajante.idade}</span></p>
            <p>Data de partida: <span>{new Date(viajante.dataDeViagem).toLocaleDateString()}</span></p>
            <p>Destino: <span>{viajante.destino}</span></p>
            <p>Mala de despacho: <span>{viajante.mala.malaDeDespacho[0]}</span> unidade com {viajante.mala.malaDeDespacho[1]}</p>

            <p>Mala de mão: <span>{viajante.mala.malaDeMao[0]}</span> unidade com {viajante.mala.malaDeMao[1]}</p>

            <p>mochila Pessoal: <span>{viajante.mala.malaPessoal}</span></p>
          </div>
        </div>
      ))}</div>

    </div>

    
  );
}

export default TestePagina;