import './App.css';
import { useEffect } from 'react'
import { listAllPosts } from './services/posts'

function App() {

  useEffect(() => {
    const request = async () => {
      const response = await listAllPosts()
      console.log(response.data)
    }
    request()
  }, [])

  return (
    <p>Teste</p>
  );
}

export default App;
