// components/card/Card.jsx

// Importa los estilos como un objeto
import styles from './Card.module.css';
import Chip from '../chip/Chip.jsx';

function Card({ title, content, techs }) {
  return (
    // Usa className={styles.nombreDeLaClase}
    <div className={styles.container}> 
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{content}</p>
      {techs.map((tech, index) => (
        <Chip key={index} name={tech.name} icon={tech.icon} />
      ))}
    </div>
  );
}

export default Card;