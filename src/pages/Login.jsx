import React, { useEffect, useState } from 'react'
import TextContainerH2P from '../components/TextCont-H2-P';
import { Button, Contenedor, DivCol, Form, P} from '../style/estilos';
import Input from '../components/Input'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { getData } from '../helper/CRUD';
import { urlUsers } from '../modules/url';

const initialLogin = {
    phone :  '',
    password : '',
}

function Login() {
    const navigate = useNavigate();

    const [cel, setCel] = useState('');
    const [pass, setPass] = useState('');
    const [login, setLogin] = useState(initialLogin)

    useEffect(()=> {
        getData(urlUsers, setLogin)
    }, [])

    const cambiarCel = ({target}) => {
        setCel(target.value)
    }
    const cambiarPassword = ({target}) => {
        setPass(target.value)
    }

    const enviar = (e) => {
        e.preventDefault()

        console.error(login);

        const foundUser = login.find((num)=> {
            return  (num.phone === cel) && (num.password === pass)
        });

        sessionStorage.setItem('user', JSON.stringify(foundUser))

        if (foundUser === undefined)  {
            alert('Ha ocurrido un error. Verifica las credenciales')
        }else {
            window.confirm('Sesión iniciada.') && <Navigate to='/b1'/>

            const handleClick = () => {
                navigate('/home')
            }

            handleClick();
        }
    }

  return (
    <Contenedor column>
        <TextContainerH2P title='Welcome back' text='Sign in to an existing account using your phone number'/>

        <Form onSubmit={enviar}>
            <DivCol className='inicio-div'>
            <Input placeh='1234567' tipo='number' value={cel} funcion={cambiarCel}/>
            <Input placeh='Password' tipo='password' value={pass} funcion={cambiarPassword}/>
            </DivCol>
            <Button type='submit' >Login</Button>
        </Form>
            <P className='m-t'>Don't have account?<Link className='anchor' to='/createAccount'> Sign up</Link></P>
    </Contenedor>
  )
}

export default Login;