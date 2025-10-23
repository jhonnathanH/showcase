// Importa los estilos como un objeto
import styles from './Chip.module.css'; 

function Chip(props) {
  const { icon, name } = props;

  return (
    <div className={styles.container}> 
        {icon && <img src={icon} alt={`${name} icon`} className={styles.icon} />}
        {!icon && name && <span className={styles.name}>{name}</span>}
    </div>
  );
}

export default Chip;