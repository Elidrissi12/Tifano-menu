import React from "react";

const menuData = {
  Jus: [
    { name: "Jus de citron", price: 16 },
    { name: "Jus d'orange", price: 18 },
    { name: "Jus de pomme", price: 20 },
    { name: "Jus de banane", price: 20 },
    { name: "Jus de fraise", price: 25 },
    { name: "Jus d'avocat", price: 25 },
    { name: "Jus de mangue", price: 25 },
    { name: "Jus d'ananas", price: 25 },
    { name: "Panaché", price: 30 },
  ],
  "Jus Détox": [
    { name: "Citron gingembre", price: 20 },
    { name: "Ananas gingembre", price: 28 },
    { name: "Tropical", price: 28 },
  ],
  Burger: [
    { name: "Burger chicken", price: 25 },
    { name: "Burger viande hachée", price: 30 },
  ],
  Tacos: [
    { name: "Tacos poulet", price: 30 },
    { name: "Tacos saucisse", price: 30 },
    { name: "Tacos viande hachée", price: 32 },
    { name: "Tacos mixte", price: 35 },
  ],
  Panini: [
    { name: "Panini poulet", price: 22 },
    { name: "Panini saucisse", price: 22 },
    { name: "Panini viande hachée", price: 25 },
    { name: "Panini mixte", price: 25 },
  ],
  "Milk-shake": [
    { name: "Chocolat", price: 30 },
    { name: "Banane", price: 30 },
    { name: "Vanille", price: 30 },
    { name: "Fraise", price: 30 },
    { name: "Oreo", price: 32 },
    { name: "Option supplémentaire", price: 35 },
  ],
  Cocktails: [
    { name: "Mojito classique", price: 20 },
    { name: "Mojito fraise", price: 20 },
  ],
  Smoothies: [
    { name: "Mangue banane", price: 27 },
    { name: "Mangue fraise", price: 27 },
    { name: "Ananas mangue", price: 30 },
  ],
  "Petit Déjeuner": [
    {
      name: "Express",
      price: 25,
      description:
        "Assortiment viennoiseries, jus d'orange ou carotte, boisson chaude au choix",
    },
    {
      name: "Continental",
      price: 30,
      description:
        "Omelette au choix, olives noires, fromage, huile d'olive, jus d'orange ou carotte, boisson chaude au choix",
    },
    {
      name: "Espagnol",
      price: 30,
      description:
        "Corbeille de pain, omelette légumes, olives noires et vertes, huile d'olive, jus d'orange ou carotte, boisson chaude au choix",
    },
    {
      name: "Beldi",
      price: 35,
      description:
        "Assortiment msemmen, harcha, pain batbout, amlou, fromage, miel, jus d'orange ou carotte, boisson chaude au choix",
    },
    {
      name: "Fassi",
      price: 35,
      description:
        "Oeufs au khlii, corbeille de pain, huile d'olive, miel, boisson chaude, jus d'orange au choix",
    },
    {
      name: "Tifano",
      price: 50,
      description:
        "Panier pain et viennoiserie, beurre, confiture, miel, assortiment msemmen, harcha, oeufs au choix, yaourt, jus d'orange au choix, boisson chaude au choix",
    },
  ],
  "À la Carte": [
    { name: "Viennoiserie", price: 7 },
    { name: "Msemmen", price: 7 },
    { name: "Harira marocain", price: 15 },
    { name: "Omelette nature", price: 16 },
    { name: "Crêpes Nutella", price: 18 },
    { name: "M9ila à la tomate, oignon et cumin", price: 18 },
    { name: "M9ila au fromage", price: 18 },
    { name: "M9ila au fromage et fines herbes fraîches", price: 20 },
    { name: "M9ila au khlii", price: 20 },
    { name: "Toast au fromage", price: 25 },
  ],
  "Boissons Chaudes": [
    { name: "Espresso", price: 12 },
    { name: "Verveine", price: 12 },
    { name: "Thé noir", price: 12 },
    { name: "Café nes nes", price: 12 },
    { name: "Café crème", price: 13 },
    { name: "Verveine au lait", price: 13 },
    { name: "Thé à la menthe", price: 13 },
    { name: "Américano", price: 14 },
    { name: "Chocolat chaud", price: 14 },
    { name: "Double espresso", price: 16 },
    { name: "Cappuccino", price: 16 },
    { name: "Nespresso", price: 18 },
    { name: "Cappuccino chantier", price: 18 },
    { name: "Latte aromatisé", price: 22 },
  ],
  "Boissons Froides": [
    { name: "Eau minérale (50cl)", price: 8 },
    { name: "Oulmes", price: 13 },
    { name: "Soda (33ml)", price: 13 },
    { name: "Orangina", price: 15 },
    { name: "Ice coffee", price: 23 },
    { name: "Red Bull", price: 25 },
  ],
};

const MenuPage = () => {
    return (
      <div style={styles.pageContainer}>
        <header style={styles.header}>
          <h1 style={styles.title}>Tifano Menu</h1>
        </header>
        {Object.entries(menuData).map(([category, items]) => (
          <section key={category} style={styles.categorySection}>
            <h2 style={styles.categoryTitle}>{category}</h2>
            <ul style={styles.itemList}>
              {items.map((item, index) => (
                <li key={index} style={styles.menuItem}>
                  <div>
                    <span style={styles.itemName}>{item.name}</span>
                    {item.description && (
                      <p style={styles.itemDescription}>{item.description}</p>
                    )}
                  </div>
                  <span style={styles.itemPrice}>{item.price} Dh</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    );
  };

  const styles = {
    pageContainer: {
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      maxWidth: "900px",
      margin: "0 auto",
      lineHeight: 1.6,
    },
    header: {
      backgroundColor: "#f8f8f8",
      padding: "20px 0",
      textAlign: "center",
      marginBottom: "30px",
    },
    title: {
      fontSize: "36px",
      margin: 0,
      color: "#333",
    },
    categorySection: {
      marginBottom: "25px",
    },
    categoryTitle: {
      fontSize: "24px",
      color: "#555",
      marginBottom: "10px",
      borderBottom: "2px solid #ddd",
      paddingBottom: "5px",
    },
    itemList: {
      listStyleType: "none",
      padding: 0,
      margin: 0,
    },
    menuItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 0",
      borderBottom: "1px solid #eee",
    },
    itemName: {
      fontSize: "16px",
      fontWeight: "bold",
    },
    itemDescription: {
      fontSize: "14px",
      color: "#777",
      marginTop: "5px",
    },
    itemPrice: {
      fontSize: "16px",
      color: "#666",
    },
    
      
  };
  
  export default MenuPage;