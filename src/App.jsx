import { useState } from "react";
import Card from "./Card";
import Styles from "./styles/Form.module.css"

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  const [userName, setUserName] = useState('')
  const [userDNI, setUserDNI] = useState('')

  const [greenFlag, setGreenFlag] = useState(false)
  const [redFlag, setRedFlag] = useState(false)

  const userData = {
    userName: userName,
    userDNI: userDNI
  }

  console.log(userData);
  

  const onChangeUserName = (e) =>{
    setUserName(e.target.value)
  }

  const onChangeDNI = (e) =>{
    setUserDNI(e.target.value)
  }

  const hasLeadingSpaces = (input) =>{
    const regex = /^\s+/
    return regex.test(input)
  }

  const validateUserName = () =>{
    if(userName.length > 3 && !hasLeadingSpaces(userName)){
      return true
    }else{
      return false
    }
  }

  const validateUserDNI = () =>{
    if(userDNI.length >= 6){
      return true
    }
    return false
  }

  const handlerSubmit = (e) =>{
    e.preventDefault()
    if(validateUserName() && validateUserDNI()){
      setGreenFlag(true)
      if(redFlag === true){
        setRedFlag(false)
      }
    }else{
      setRedFlag(true)
    }
  }

  return (
    <div className="App">
      <h1 className={Styles.text}>¡Hola! Ingresa tus datos</h1>
      <form className={Styles.container} onSubmit={handlerSubmit}>
        <input className={Styles.input} onChange={onChangeUserName} type="text" placeholder="Ingresa tu nombre"/>
        <input className={Styles.input} onChange={onChangeDNI} type="number" placeholder="Ingresa tu DNI"/>
        <button className={Styles.button} type="submit">ENVIAR</button>
      </form>
      {greenFlag && <Card userData={userData}/>}
      {redFlag && <p className={Styles.text} style={{color: "red"}}>Por favor chequea que la información sea correcta</p>}
    </div>
  );
}

export default App;
