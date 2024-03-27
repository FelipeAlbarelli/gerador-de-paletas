import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const log = (x: any) => {
    console.log(x);
  };

  return (
    <>
      <input onChange={(e) => log(e.target.value)} />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default App;
