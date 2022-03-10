import axios from 'axios';
import React, {useState, useEffect} from 'react';


  const RANDOM_ADVICE_URL = 'https://api.adviceslip.com/advice';
  const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      async function getData(){
        const response = await axios.get(url)
        setData(response.data.slip)
        setLoading(false);
      }
      getData();
    },[loading]);

    return {data, loading, setLoading};
    
  }
 

function App() {

  const {data, loading, setLoading} = useFetch(RANDOM_ADVICE_URL);

  return (
    <div className="App">
      <div className='adviceBox'>
        {loading ? <div>Loading...</div>:
        <><p>{data.advice}</p><p>#{data.id}</p></>}
        </div>
      <button onClick={() => setLoading(true)}>Get Advice</button>
    </div>
  );
}

export default App;
