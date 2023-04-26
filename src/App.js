import React from "react";
import Button from "./Components/Button";
import Style from "./App.module.css";
import { increaseBtnCount } from "./redux/todoReducer";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.increase);
  const array = ["A", "B", "C", "D", "E", "F", "G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  return (
    <div className={Style.root}>
      <div className={Style.buttons}>
        {array.map((ele, ind) => {
          return (
            <Button
              key={ind}
              value={ele}
              dispatch={dispatch}
              increaseBtnCount={increaseBtnCount}
              name={ele}
            />
          );
        })}
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>A</th>
              <th>B</th>
              <th>C</th>
              <th>D</th>
              <th>E</th>
              <th>F</th>
              <th>G</th>
              <th>H</th>
              <th>I</th>
              <th>J</th>
              <th>K</th>
              <th>L</th>
              <th>M</th>
              <th>N</th>
              <th>O</th>
              <th>P</th>
              <th>Q</th>
              <th>R</th>
              <th>S</th>
              <th>T</th>
              <th>U</th>
              <th>V</th>
              <th>W</th>
              <th>X</th>
              <th>Y</th>
              <th>Z</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selector.A}</td>
              <td>{selector.B}</td>
              <td>{selector.C}</td>
              <td>{selector.D}</td>
              <td>{selector.E}</td>
              <td>{selector.F}</td>
              <td>{selector.G}</td>
              <td>{selector.H}</td>
              <td>{selector.I}</td>
              <td>{selector.J}</td>
              <td>{selector.K}</td>
              <td>{selector.L}</td>
              <td>{selector.M}</td>
              <td>{selector.N}</td>
              <td>{selector.O}</td>
              <td>{selector.P}</td>
              <td>{selector.Q}</td>
              <td>{selector.R}</td>
              <td>{selector.S}</td>
              <td>{selector.T}</td>
              <td>{selector.U}</td>
              <td>{selector.V}</td>
              <td>{selector.W}</td>
              <td>{selector.X}</td>
              <td>{selector.Y}</td>
              <td>{selector.Z}</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
