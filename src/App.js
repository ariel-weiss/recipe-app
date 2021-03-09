
import './App.css';

function App() {
  const APP_ID = '69c8cf17';
  const APP_KEY = '991ab8eb9fa41a1e9c59fac61b7edb4e';
  const QUERY = 'chicken';
  const request_template = `https://api.edamam.com/search?q=${QUERY}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  return (
    <div className="App">
      <form className='search-form'>
        <input className='search-bar' type='text' />
        <button className='search-button' type='submit'>Search</button>
      </form>
    </div>
  );
}

export default App;
