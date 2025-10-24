import Cards from "../../components/cards/Cards";
import { useState, useEffect } from 'react';

function ProjectsPage() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchProjects() {
      try {
        // Llama a la API Route que creaste
        const response = await fetch('/api/projects'); 
        const result = await response.json();
        console.log(result);
        if (result.status === 'ok') {
          setCards(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  if (loading) {
    return <div>Cargando proyectos desde MongoDB...</div>;
  }
  return (
    <div>
      <Cards initialCards={cards}/>
    </div>
  );
}

export default ProjectsPage;