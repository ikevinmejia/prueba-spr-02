import React, { useState } from "react";
import Card from "../components/Card";
import CardCourse from "../components/CardCourse";
import HeaderHome from "../components/MainHome";
import { P, Section } from "../style/estilos";


function Home() {
  const [nameUser, setNameUser] = useState("");
  const [coin, setCoin] = useState(0);
  const { name, coins } = JSON.parse(sessionStorage.getItem("user"));
  // const [loading, setLoading] = useState(false)

  setCoin(coins);
  setNameUser(name);

  return (
    <>
      <HeaderHome name={nameUser} coins={coin} />
      <main className="main">
        {/* Construcción de la sección de scroll o cards */}
        <P pHome>Courses</P>
        <div className="scroll">
          <Section>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Section>
        </div>

        {/* Sección de los cursos */}

        <P pHome>Topics to study</P>
        <Section courses>
            <CardCourse/>
        </Section>
      </main>
    </>
  );
}

export default Home;
