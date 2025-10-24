import { useState, useEffect } from "react";
import Techs from "../../components/techs/Techs";
import NewTechModal from "../../components/techs/NewTechModal";
import styles from "./index.module.css";

export default function TechList() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchTechnologies() {
      try {
        // Llama a la API Route que creaste
        const response = await fetch("/api/techs");
        const result = await response.json();
        console.log(result);
        if (result.status === "ok") {
          setTechnologies(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch technologies:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTechnologies();
  }, []);

  const addTechnology = async (tech) => {
    try {
      const response = await fetch("/api/techs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tech),
      });
      const result = await response.json();
      console.log(result);
      if (result.status === "created") {
        const newTech = {
            ...tech,
            _id: result.data.insertedId
        }
        setTechnologies([...technologies, newTech]);
        setShowModal(false);
      }
    } catch (error) {
      console.error("Failed to add technology:", error);
    }
  };

  if (loading) {
    return <div>Cargando tecnologías desde MongoDB...</div>;
  }
  return (
    <main className={styles.pageMain}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Technologies</h1>

          <button
            onClick={() => setShowModal(true)}
            className={styles.addButton}
          >
            Agregar
          </button>
        </div>

        <Techs technologies={technologies} />
      </div>

      {showModal && (
        <NewTechModal
          onClose={() => setShowModal(false)}
          onSave={addTechnology}
        />
      )}
    </main>
  );
}
