import { useState } from "react";
import Header from "./components/Header";
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className="flex mt-5 mx-5">
        <Form />
      </div>
      
    </div>
  );
}

export default App;
