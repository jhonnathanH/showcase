// components/card/Card.jsx
import { useState } from "react";
import Link from "next/link";

import Card from "../card/Card";
import styles from "./Cards.module.css";

function Cards({ title, content }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Card 1",
      content: "Content for card 1",
      techs: [{ name: "React", icon: "" }],
    },
    {
      id: 2,
      title: "Card 2",
      content: "Content for card 2",
      techs: [
        { name: "Angular", icon: "" },
        { name: "Javascript", icon: "" },
      ],
    },
    {
      id: 3,
      title: "Card 3",
      content: "Content for card 3",
      techs: [{ name: "Node", icon: "" }],
    },
    {
      id: 4,
      title: "Card 4",
      content: "Content for card 4",
      techs: [
        { name: "NEXT", icon: "" },
        { name: "Java", icon: "" },
        { name: "React", icon: "" },
      ],
    },
    {
      id: 5,
      title: "Card 5",
      content: "Content for card 5",
      techs: [{ name: "Vue", icon: "" }],
    },
    {
      id: 6,
      title: "Card 6",
      content: "Content for card 6",
      techs: [{ name: "Svelte", icon: "" }],
    },
    {
      id: 7,
      title: "Card 7",
      content: "Content for card 7",
      techs: [{ name: "Django", icon: "" }],
    },
  ]);

  const handleSearchChange = (event) => {
    // Actualiza el estado con el nuevo valor del input
    setSearchTerm(event.target.value);
  };

  const filteredCards = cards.filter((card) => {
    // Convierte el término de búsqueda a minúsculas para una comparación sin distinción de mayúsculas
    const lowerSearchTerm = searchTerm.toLowerCase();

    // Filtra si el título O el contenido incluye el término de búsqueda
    return (
      card.title.toLowerCase().includes(lowerSearchTerm) ||
      card.content.toLowerCase().includes(lowerSearchTerm)
    );
  });

  return (
    // grid of cards
    <div className={styles.parent}>
      <div className={styles.searchBar}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Buscar tarjetas..."
          className={styles.searchInput}
        />
      </div>
      {filteredCards.length === 0 && (
        <div className={styles["empty-cards"]}>
          <p>No cards found</p>
        </div>
      )}
      <div className={styles["container-cards"]}>
        {filteredCards.map((card) => (
          <Link
            key={card.id}
            href={`/projects/${card.id}`}
            passHref
          >
            <Card
              className={styles["card-item"]}
              title={card.title}
              content={card.content}
              techs={card.techs}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Cards;
