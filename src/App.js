import "./styles.css";
//import Card
import Card from "./components/Card";
import Card2 from "./components/Card2";
import cardsArr from "./data";
// console.log(cardsArr)

const cards = cardsArr.map((element, index) => {
  return (
    <Card
      key={index}
      {...element}
      // title={element.title} // this is the initial code that was replaced with the SPREAD operator.
      // url={element.url}
      // img={element.img}
      // text={element.text}
    />
  );
});

// console.log(cards);

export default function App() {
  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">{cards}</section>
    </div>
  );
}