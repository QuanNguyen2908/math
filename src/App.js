import React ,{useState, useEffect} from 'react';
import MathJax from 'react-mathjax';

var tex ;

function App() {
  const [values, setValues] = useState('');

  const isChange = (event) =>{
    setValues(event.target.value);
    console.log('valuse : ',values);
    //console.log(event.target.value);
  }
  tex = values;

// useEffect(() => {
//   tex = values;
// }, [values]);
  return (
    <div className="App" style ={{marginLeft : '30px'}}>
      <input style={{width :'500px', marginTop : '50px'}} onChange={isChange}></input>
      <MathJax.Provider>
            <div>
                Result math type :
 
                <MathJax.Node formula={tex} />
            </div>
        </MathJax.Provider>
    </div>
  );
}

export default App;
