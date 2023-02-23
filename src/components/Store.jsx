import "../styles/Store.css";
import { stockItems } from "../stockitems";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Store() {
  const mainList = generateListofLists();
  const numofelements = mainList.length;
  const [listToRender, setListToRender] = useState(mainList[0]);

  function changeList(page) {
    let f = function () {
      setListToRender(mainList[page]);
    };
    return f;
  }

  function buttonGen() {
    const buttonList = [];
    for (let j = 0; j < mainList.length; j++) {
      let button = (
        <button type="button" key={j} onClick={changeList(j)}>
          {j}
        </button>
      );
      buttonList.push(button);
    }
    return buttonList;
  }

  return (
    <div className="Store">
      <h1>Store</h1>
      <hr></hr>
      <div className="container">
        {listToRender.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`/store/${item.id}`}>
                <img src={item.fullpath} alt="image"></img>
                <h2>{item.name}</h2>
                <p>{item.price}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="buttonContainer">{buttonGen()}</div>
    </div>
  );
}

function generateListofLists() {
  let lol = [];
  let i = 0;
  while (i < 3) {
    lol[i] = [];
    i++;
  }
  let j = 0;
  for (const x of Object.keys(stockItems)) {
    if (lol[j].length > 8) {
      j++;
    }
    lol[j].push({ id: x, ...stockItems[x] });
  }
  return lol;
}
