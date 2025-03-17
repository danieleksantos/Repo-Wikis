import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from '../styles';
import Button from '../components/Button';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos ]= useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id) {
      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return
      }
    }
    alert('Repositório não encontrado')
  }

  const handleRemoveRepo = (id) => {
    
    const updatedRepos = repos.filter(repo => repo.id !== id);
    setRepos(updatedRepos);
  };
  
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='logo GitHub'/>
      <Input placeholder="seulogin/seuRepositorio" value={currentRepo} onChange={(e)=> setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => (
        <ItemRepo key={repo.id} repo={repo} handleRemoveRepo={() => handleRemoveRepo(repo.id)} />
      ))}      
    </Container>
  );
}

export default App;
