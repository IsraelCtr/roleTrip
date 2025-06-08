
import { useState, useEffect,useRef } from 'react'
import airplane from '../../assets/airPlane.svg'
import login from '../../assets/login.svg'
import './style.css'
import  api from '../../services/api.js'
import { Link } from 'react-router-dom'

function Home() {


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
    <>
   
      <div className='container'> 
         <header>
     <Link to= {"/"} > <img className='airplane' src={airplane} alt="" /></Link>
      <Link to ={"/login"} href=""><img className='login' src={login} alt="" /></Link>
    </header>
    <div className='contianerBtnteste'><Link to={"/teste"}> <button id='testarSemCadastro'>testar sem cadastro</button></Link></div>
      </div>


      
      
     
   

    </>
  )
}

export default Home
