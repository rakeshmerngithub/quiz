import React, { useState } from "react";
import { question } from "./Questions";

const Quiz = () => {
  const [count, setCount] = useState(0);

  const [result, setResult] = useState(
    Array.from({ length: question.length }, () => {
      return [];
    })
  );

  console.log(result);
  const CheckboxHandler = (element, index, e) => {
    // result.push(elem)
    if (e.target.checked) {
      setResult((prev) =>
        prev.map((elem, index) =>
          index === count ? [...elem, e.target.name] : elem
        )
      );
    } else {
      setResult((prev) =>
        prev.map((elem, index) =>
          index === count
            ? elem.filter((elems, i) => !elems.includes(e.target.name))
            : elem
        )
      );
    }
  };

  const SubmitHandler = () => {
    const cArray = question.map((elem) => elem.correctAnswer);
    console.log(cArray);
    console.log(result);
    let count = 0;
    for (let a in cArray) {
      if (cArray[a][0] === result[a][0]) count++;
    }
    console.log(count);
  };
  return (
    <>
      <ol>
        <div>
          <p>
            {count + 1}. {question[count].question}
          </p>
          <div>
            {question[count].options.map((elem, index) => {
              return (
                <div>
                  <input
                    type="checkbox"
                    id={elem}
                    name={elem}
                    checked={result[count].includes(elem)}
                    onChange={(e) => CheckboxHandler(elem, index, e)}
                  />
                  <label htmlFor={elem}>{elem}</label>
                </div>
              );
            })}
            {count !== 0 && (
              <button onClick={(e) => setCount(count - 1)}>prev</button>
            )}
            {count !== question.length - 1 && (
              <button onClick={(e) => setCount(count + 1)}>next</button>
            )}
            {count === question.length - 1 && (
              <button onClick={SubmitHandler}>Submit</button>
            )}
          </div>
        </div>
        {/* {question.map((ques) => (
          <li key={ques.id}>
            <div>{ques.question}</div>
            <div>
              <input type="checkbox" /> : {ques.options[0]}
              <br />
              <input type="checkbox" /> : {ques.options[1]}
              <br />
              <input type="checkbox" /> : {ques.options[2]}
              <br />
              <input type="checkbox" /> : {ques.options[3]}
              <br />
              <button>prev</button>
              <button>next</button>
              <button>Submit</button>
            </div>
          </li>
        ))} */}
      </ol>
    </>
  );
};

export default Quiz;
