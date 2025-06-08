import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './estilo.css'; // Certifique-se de que o caminho do CSS está correto
const Login = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    email: '',
    senha: '' // Alterado para 'senha' para ficar em português
  });
  
  // Estado para mensagens de erro
  const [erro, setErro] = useState('');
  
  // Estado para controlar o carregamento durante o envio
  const [carregando, setCarregando] = useState(false);

  /**
   * Função para lidar com mudanças nos campos do formulário
   * @param {Object} e - Evento do input
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Função para lidar com o envio do formulário
   * @param {Object} e - Evento de submit
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    setCarregando(true);
    setErro('');
    
    try {
      // Simulação de chamada à API
      console.log('Dados de login:', formData);
      
      // Simula tempo de espera da API (1 segundo)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Em uma aplicação real, você faria:
      // 1. Chamada à API de autenticação
      // 2. Armazenamento do token
      // 3. Redirecionamento para área logada
      
      alert('Login bem-sucedido! (Simulação)');
    } catch (err) {
      setErro(err.message || 'Falha no login. Tente novamente.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="container-login">
      <h2>Login</h2>
      {erro && <div className="mensagem-erro">{erro}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="grupo-form">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="grupo-form">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>
        
        <button className='btnSub' type="submit" disabled={carregando}>
          {carregando ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
      
      <div className="links-login">
        <a href="/recuperar-senha">Esqueceu a senha?</a>
        <a href="/registrar">Não tem uma conta? Registre-se</a>
      </div>
    </div>
  );
};

export default Login;