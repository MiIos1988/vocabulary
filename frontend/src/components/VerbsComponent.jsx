import React, { useEffect, useState } from "react";
import { getVerbs } from "../services/getData";

const VerbsComponent = () => {
  const [arrayVerbs, setArrayVerbs] = useState([]);

  useEffect(() => {
    getVerbs().then((res) => setArrayVerbs(res.data));
  }, []);
  return (
    arrayVerbs &&
    arrayVerbs.map((verbs, index) => {
      return (
        <div className=" divVerbs text-center" key={index}>
          <p className="text-center fs-2">{verbs}</p>
          <hr className=" m-0" />
        </div>
      );
    })
  );
};

export default VerbsComponent;
