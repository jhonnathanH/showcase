import { useState } from "react";
import styles from "./NewTechModal.module.css";

export default function NewTechModal({ onClose, onSave }) {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [type, setType] = useState("Frontend");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSave({ name, logo, type });
  };

return (
    <div className={styles.modalOverlay}>
      
      <div className={styles.modalContainer}>
        
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Agregar tarjeta</h2>
          <button
            onClick={onClose}
            className={styles.closeButton} // ✅ Reemplaza text-zinc-400/hover:text-white/text-lg
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.modalForm}>
          
          {/* Campo Name */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.formInput}
              placeholder="React"
              required
            />
          </div>

          {/* Campo Logo */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Logo (opcional)</label>
            <input
              value={logo}
              onChange={(e) => setLogo(e.target.value)}
              className={styles.formInput}
              placeholder="URL del logo"
            />
          </div>

          {/* Campo Tipo (Select) */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Tipo</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className={styles.formInput}
            >
              <option>Frontend</option>
              <option>Backend</option>
              <option>DevOps</option>
            </select>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}
