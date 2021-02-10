import { useState } from "react";
import "./styles.css";
const birthdays = [
  {
    name: "Akhil",
    age: "25 years",
    src:
      "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2019/05/30/791229-untitled-3.jpg"
  },
  {
    name: "Sachin",
    age: "30 years",
    src:
      "https://s3.ap-southeast-1.amazonaws.com/cdn.deccanchronicle.com/sites/default/files/akhil-akkineni-2406_0_0_1.jpg"
  },
  {
    name: "Vijay",
    age: "21 years",
    src: "https://s3.india.com/wp-content/uploads/2021/01/pjimage-24-4.jpg"
  },
  {
    name: "Saurav",
    age: "20 years",
    src:
      "https://www.infoknocks.com/wp-content/uploads/2020/04/Saurav-Sharma-news-anchor.jpg"
  },
  {
    name: "Samar",
    age: "35 years",
    src:
      "https://static.toiimg.com/thumb/msid-17153803,width-800,height-600,resizemode-75,imgsize-67372,pt-32,y_pad-40/17153803.jpg"
  }
];
export default function App() {
  const [names, setName] = useState(birthdays);
  return (
    <div className="App">
      <h1 id="count">{names.length} Birthdays Today</h1>
      {names.map((n, i) => (
        <div key={i} className="card">
          <img src={n.src} alt={n.name} />
          <div className="cardText">
            <h1>{n.name}</h1>
            <h3>{n.age}</h3>
          </div>
        </div>
      ))}

      <button onClick={() => setName([])}> Clear All</button>
    </div>
  );
}
