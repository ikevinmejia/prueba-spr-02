import React from "react";
import { useState, useEffect } from "react";

function Contador() {
  const [segundos, setSegundos] = useState('4');
  useEffect(() => {
    let sampleInterval = setInterval(() => {
      if (segundos > 0) {
        setSegundos(segundos - 1);
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
  });

  return (
    <div className="inicio-div">
      {!(segundos) ? "" : (
        <p>
          {segundos < 10 ? `0${segundos}` : segundos}
        </p>
      )}
    </div>
  );
}

export default Contador;