import './App.css';
import {data} from "./data"
import Header from "./Header"
import Card from "./Card"

const cards = data.map(card => {
  return (
    <Card 
        key={card.id}
        {...card}
    
    />
  )

})

function App() {
  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;
