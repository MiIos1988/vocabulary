import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { translate } from "../services/translate";
import { deleteWordInArray } from "../redux/vocabularyArray";

const VocabularyComponent = () => {
  const dispatch = useDispatch();
  const [translatedWord, setTranslatedWord] = useState("");
  const [selectedWordIndex, setSelectedWordIndex] = useState(null);
  const [allDeleteWord, setAllDeleteWord] = useState([]);

  const vocabularySelector = useSelector(
    (state) => state.vocabularySlice.vocabulary
  );

  const deleteWord = (index) => {
    dispatch(deleteWordInArray(index));
    setSelectedWordIndex();
    setAllDeleteWord([...allDeleteWord, vocabularySelector[index]]);
  };

  const translateWordFun = (word) => {
    translate(word).then((res) => {
      console.log(word);
      setTranslatedWord(res.data.matches[0].translation);
    });
  };

  return (
    <div className="container">
      <h1>Vocabulary</h1>
      {vocabularySelector.map((el, index) => {
        return (
          <div key={index}>
            <div className="d-flex">
              <div
                onClick={(e) => {
                  translateWordFun(e.target.textContent);
                  setSelectedWordIndex(index);
                }}
                className="mb-0 englishWord"
              >
                {el}
              </div>
              {index === selectedWordIndex ? (
                <p className="result"> {translatedWord}</p>
              ) : (
                <p className="result"></p>
              )}
              <button
                onClick={() => deleteWord(index)}
                className="btn btn-sm btn-danger me-2"
              >
                Delete
              </button>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default VocabularyComponent;
