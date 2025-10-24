import "@/styles/globals.css";

import User from "../components/user/User";
import LayoutStyles from "../styles/Layout.module.css"; 

export default function App({ Component, pageProps }) {
  return (
    <div className={LayoutStyles.appLayout}>
      <User />
      <main className={LayoutStyles.mainContent}>
        <Component {...pageProps} />
      </main>
      
    </div>
  );
}