import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import CardCourse from "../components/CardCourse";
import HeaderHome from "../components/MainHome";
import { getData } from "../helper/CrudSalvavidas";
import { urlQuiz } from "../modules/url";
import { P, Section } from "../style/estilos";


function Home() {

  const { name, coins } = JSON.parse(sessionStorage.getItem("user"));
  const [courseCard, setCourseCard] = useState(null);


  useEffect(() => {
    getData(setCourseCard, urlQuiz)
  }, []);


  console.log(name)

  if (courseCard != null) {

    return (
      <>
        <HeaderHome name={name} coins={coins} />
        <main className="main">

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



          <P pHome>Topics to study</P>
          <Section courses>
            {courseCard.map((e) =>
              <CardCourse key={e.id} 
              img = {e.img}
              titulo = {e.titulo}
              descripcion = {e.descripcion}
              duracion = {e.duracion}
              
              />
              
              )}
            
          </Section>
        </main>

      </>
    );
  }
}

export default Home;
