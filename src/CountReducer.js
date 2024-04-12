
import { useReducer } from 'react';

function countReducer(initialState = 0, action) {
  switch (action) {
    case 'increment':
      return initialState + 1;
    case 'decrement':
      return initialState - 1;
    case 'reset':
      return 0;
    default:
      return initialState;
  }
}
function Reducer() {
  const [value, setValue] = useReducer(countReducer, 0);

  return (
   <center>
     <>
    
     <div className="Image">
     <div className="box">
      <h1 className='reducer-head'>Reducer</h1>
     
      <span className="output">{value}</span>
      <div className="card">
        <button className="add" onClick={() => setValue('increment')}>add</button>
        <button className="reset" onClick={() => setValue('reset')}>Reset</button>
        <button className="subtract" onClick={() => setValue('decrement')}>subtract</button>
      </div>
    </div>
    </div>
    </>
   </center>
  );
}

export default Reducer;

