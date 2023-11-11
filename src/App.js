import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import A from './components/A';
import B from './components/B';

function App() {
  const [value, setValue] = useState('')

  const [post, setPost] = useState([])

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPost(posts))
    }, [])

  
  return (
    <div style={{padding: '1rem'}}>
      <input 
        value = {value}
        onChange={e => setValue(e.target.value)}

      />

      <div style={{display: 'flex'}}>
        <A message={value} posts={post}/>
        <B message={value} posts={post}/>



      </div>
    </div>


  );
}

export default App;
