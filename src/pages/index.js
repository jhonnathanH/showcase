import Cards from "../components/cards/Cards";
import User from "../components/user/User";
import styles from "./index.module.css";

function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <User/>
      <Cards/>
    </div>
  );
}

export default HomePage;