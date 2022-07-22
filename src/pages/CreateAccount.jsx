import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import TextContainerH2P from "../components/TextCont-H2-P";
import { postData } from "../helper/CRUD";
import { urlUsers } from "../modules/url";
import { Button, Contenedor, DivCol, Form } from "../style/estilos";

function CreateAccount() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const cambiarName = ({target}) => {
    setName(target.value)
  }
  const cambiarEmail = ({target}) => {
    setEmail(target.value)
  }
  const cambiarPhone = ({target}) => {
    setPhone(target.value)
  }
  const cambiarPassword = ({target}) => {
    setPassword(target.value)
  }

  const enviar = (e) => {
    e.preventDefault()

    const handleClick = () => {
      navigate('/login')
    }
    const newUser = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      coins: 0,
    }
    console.log(JSON.stringify(newUser, null, 2));
    handleClick()

    postData(urlUsers, newUser)

  }

  return (
    <Contenedor column>
      <TextContainerH2P
        title="Create new Account"
        text="Create a new account by filling in all the fields or log in to an existing account"
      />

      <Form onSubmit={enviar}>
        <DivCol>
        <Input placeh="Name" tipo="text" funcion={cambiarName}/>
        <Input placeh="Email" tipo="email" funcion={cambiarEmail}/>
        <Input placeh="Phone" tipo="tel" funcion={cambiarPhone}/>
        <Input placeh="Password" tipo="password" funcion={cambiarPassword}/>
        </DivCol>
        <Button>Create</Button>
      </Form>
    </Contenedor>
  );
}

export default CreateAccount;
