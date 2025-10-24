// src/components/user/User.jsx

import styles from "./User.module.css";
import { 
    RiDashboardLine, 
    RiCodeLine, 
    RiRuler2Line, 
    RiSettings3Line 
} from "react-icons/ri"; 

import { BiCube } from "react-icons/bi";

const menuItems = [
  { name: "Dashboard", icon: RiDashboardLine, link: "/" },
  { name: "Frontend", icon: RiCodeLine, link: "/frontend", isActive: true },
  { name: "Backend", icon: BiCube, link: "/backend" },
  { name: "Techs", icon: RiRuler2Line, link: "/techs" },
  { name: "Settings", icon: RiSettings3Line, link: "/settings" }
];

function User({
  userName = "Jhonathan.dev",
  userAvatar = "https://i.pravatar.cc/150?img=3"
}) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.profileSection}>
        <img
          src={userAvatar}
          alt={`${userName} avatar`}
          className={styles.avatar}
        />
        <h2 className={styles.userName}>{userName}</h2>
      </div>

      <nav className={styles.navigation}>
        {menuItems.map((item, index) => {
          const linkClasses = `${styles["nav-link"]} ${item.isActive ? styles.activeLink : ""}`;
          const IconComponent = item.icon;
          return (
            <a key={index} href={item.link} className={linkClasses}>
              <IconComponent className={styles.icon} />
              <span>{item.name}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}

export default User;
