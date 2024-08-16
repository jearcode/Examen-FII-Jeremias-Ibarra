//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import Styles from './styles/Card.module.css'

function Card({userData}) {
  return (
    <div className={Styles.card}>
      <h2 className={Styles.text}>Hola {userData.userName}</h2>
      <p className={Styles.text}>Número nacional de identidad: {userData.userDNI}</p>
    </div>
  );
}

export default Card;
