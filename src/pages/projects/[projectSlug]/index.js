// pages/projects/[project]/index.js

import React from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.css';

// MOCK DATA (Debe ser la lista COMPLETA de proyectos, igual que en Cards.jsx)
const allProjects = [
    { id: 1, slug: 'card-1', title: "Proyecto React", content: "Implementación de UI dinámica.", techs: [{ name: "React" }, { name: "Redux" }] },
    { id: 2, slug: 'card-2', title: "Web Angular", content: "Aplicación SPA de gestión de tareas.", techs: [{ name: "Angular" }, { name: "TypeScript" }] },
    { id: 3, slug: 'card-3', title: "API Node", content: "Servidor RESTful con base de datos.", techs: [{ name: "Node" }, { name: "Express" }, { name: "MongoDB" }] },
    // **Asegúrate de que tus slugs sean únicos y consistentes.**
];

function ProjectDetail() {
    // 1. Obtener el router de Next.js
    const router = useRouter();
    // 2. Extraer el parámetro dinámico '[project]'
    console.log(router);
    const { projectSlug } = router.query;

    console.log(projectSlug + " este es el slug");
    // Si el router no está listo o el slug no existe, muestra un estado de carga
    if (!projectSlug) {
        return <div className={styles.loading}>Cargando detalle del proyecto...</div>;
    }

    // 3. Buscar el proyecto por el slug
    const project = allProjects.find(p => p.id === parseInt(projectSlug));

    // Si el proyecto no se encuentra
    if (!project) {
        return <div className={styles.notFound}>Proyecto no encontrado (ID: {projectSlug})</div>;
    }

    // 4. Renderizar el detalle del proyecto
    return (
        <div className={styles.detailContainer}>
            <button onClick={() => router.back()} className={styles.backButton}>
                &larr; Volver a Proyectos
            </button>
            
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.content}>{project.content}</p>

            <div className={styles.techsSection}>
                <h2 className={styles.techsHeader}>Tecnologías Usadas:</h2>
                <div className={styles.techsList}>
                    {project.techs.map((tech, index) => (
                        <span key={index} className={styles.techPill}>
                            {tech.name}
                        </span>
                    ))}
                </div>
            </div>
            
        </div>
    );
}

export default ProjectDetail;