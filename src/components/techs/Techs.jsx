// components/techs/Techs.jsx

import Image from 'next/image';
import styles from './Techs.module.css'; // ⬅️ Ahora usamos este módulo

export default function Techs({ technologies }) {
  return (
    <div className={styles.gridContainer}>
      {technologies.map((tech, i) => (
        <div key={i} className={styles.techItem}>
          
          <div className={styles.infoGroup}>
            {tech.logo && (
              <Image
                src={tech.logo}
                alt={tech.name}
                className={styles.logo} 
                width={32}
                height={32}
              />
            )}
            <span className={styles.techName}>{tech.name}</span>
          </div>
          <span className={styles.techType}>{tech.type}</span>
        </div>
      ))}
    </div>
  );
}