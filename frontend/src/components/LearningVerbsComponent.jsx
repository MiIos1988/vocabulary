import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getVerbs } from "../services/getData";

const LearningVerbsComponent = () => {
  const [arrayVerbs, setArrayVerbs] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);
  const [randomString, setRandomString] = useState("run - trčati (rʌn)");
  const [randomWord, setRandomWord] = useState("trčati");
  const [singleWord, setSingleWord] = useState(true);
  const [attempt, setAttempt] = useState("");
  const [englishWord, setEnglishWord] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    getVerbs().then((res) => setArrayVerbs(res.data));
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [singleWord]);

  useEffect(() => {
    writeEnglishVerbs(randomString);
  }, [randomString]);

  const writeOneWord = (string) => {
    let start_index = string.indexOf("-") + 2;
    let end_index = string.indexOf("(") - 1;
    let oneWord = string.substring(start_index, end_index);
    setRandomWord(oneWord);
  };

  const writeEnglishVerbs = (string) => {
    let end_index = string.indexOf("-") - 1;
    let oneWord = string.substring(0, end_index);
    setEnglishWord(oneWord);
  };

  const handlerPressKey = (e, isTrue) => {
    if (e.key === "Enter") {
      if (!isTrue) {
        setSingleWord(false);
        const random = Math.floor(Math.random() * arrayVerbs.length);
        setRandomNumber(random);
        setAttempt("");
      } else {
        const newString = arrayVerbs[randomNumber];
        setRandomString(newString);
        writeOneWord(newString);
        setSingleWord(true);
      }
    }
  };

  return (
    <div className="container ">
      {singleWord ? (
        <div className="text-center">
          <div className="d-flex justify-content-center mt-5">
            <h2>{randomWord}</h2>
            <button
              className="btn btn-primary ms-5"
              onClick={() => {
                setSingleWord(false);
                const random = Math.floor(Math.random() * arrayVerbs.length);
                setRandomNumber(random);
                setAttempt("");
              }}
            >
              View translate
            </button>
          </div>
          <input
            className="form-control my-4 inputField"
            type="text"
            placeholder="Write the verb correctly!"
            onKeyDown={(event) => handlerPressKey(event, false)}
            ref={inputRef}
            onChange={(e) => setAttempt(e.target.value)}
          />
          <p
            className={`my-4 fs-1 px-3 ${
              englishWord === attempt ? "guess" : "miss"
            }`}
          >
            {attempt}
          </p>
        </div>
      ) : (
        <>
          <div className="d-lg-flex justify-content-center mt-5 text-center">
            <h2 className="text-center">{randomString}</h2>
            <button
              className="btn btn-primary ms-lg-5"
              onClick={() => {
                const newString = arrayVerbs[randomNumber];
                setRandomString(newString);
                writeOneWord(newString);
                // writeEnglishVerbs(newString);
                setSingleWord(true);
              }}
            >
              Next verb
            </button>
          </div>
          <input
            className="form-control my-4 inputField"
            type="text"
            placeholder="Write a sentence using this verb!"
            onKeyDown={(event) => handlerPressKey(event, true)}
            ref={inputRef}
          />
        </>
      )}
    </div>
  );
};

export default LearningVerbsComponent;
