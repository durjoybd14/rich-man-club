import { useEffect, useState } from 'react/cjs/react.development';
import Peoples from './components/Peoples/Peoples';
import TotalIncome from './components/Peoples/TotalIncome/TotalIncome';
import richMans from './rich-people.json'


function App() {
  const [richPeoples, setRichPeoples] = useState([])
  useEffect(() => {
    setRichPeoples(richMans)
  }, []);

  const [cart, setCart] = useState([]);
  const handleAddCount = (people) => {

    const newCart = [...cart, people];
    setCart(newCart);
  }


  return (

    <div style={{ textAlign: 'center' }}>
      <h1>Selected People: {cart.length}</h1>
      <TotalIncome cart={cart}></TotalIncome>
      {
        richPeoples.map(richPeople => <Peoples richPeople={richPeople} key={richPeople.id} handleAddCount={handleAddCount}></Peoples>)
      }

    </div>
  );
}



export default App;
