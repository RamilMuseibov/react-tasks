import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Ноутбук Gaming Pro",
    price: 129999,
    category: "Электроника",
    rating: 4.8,
    inStock: true,
    description: "Мощный игровой ноутбук с RTX 4070",
  },
  {
    id: 2,
    name: "Смартфон SuperPhone",
    price: 89999,
    category: "Электроника",
    rating: 4.5,
    inStock: false,
    description: "Флагманский смартфон с камерой 200МП",
  },
  {
    id: 3,
    name: "Книга 'React с нуля'",
    price: 2499,
    category: "Книги",
    rating: 4.9,
    inStock: true,
    description: "Лучшее руководство по React для начинающих",
  },
];

const generateColor = (id) => {
  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEAA7",
    "#DDA0DD",
    "#98D8C8",
    "#F7DC6F",
    "#BB8FCE",
    "#85C1E9",
  ];
  return colors[id % colors.length];
};

const categories = ["Все", "Электроника", "Книги", "Одежда"];

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },
  categoryFilter: {
    margin: "20px 0",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  button: {
    padding: "10px 15px",
    border: "1px solid #ccc",
    backgroundColor: "#f0f0f0",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "all 0.3s",
  },
  activeButton: {
    backgroundColor: "#007bff",
    color: "white",
    borderColor: "#0056b3",
  },
  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
    margin: "30px 0",
  },
  productCard: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    padding: "15px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  productImage: {
    position: "relative",
    marginBottom: "15px",
    height: "150px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
  },
  productInfo: {
    textAlign: "left",
  },
  productFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15px 0",
  },
  rating: {
    color: "#ffd700",
    fontSize: "18px",
  },
  ratingNumber: {
    color: "#666",
    marginLeft: "5px",
    fontSize: "14px",
  },
  price: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#e44d26",
  },
  buyButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  buyButtonHover: {
    backgroundColor: "#218838",
  },
  disabledButton: {
    backgroundColor: "#6c757d",
    cursor: "not-allowed",
  },
  outOfStock: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "red",
    color: "white",
    padding: "5px 10px",
    borderRadius: "3px",
    fontSize: "12px",
  },
  summary: {
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    border: "1px solid #dee2e6",
  },
  productName: {
    margin: "0 0 10px 0",
    fontSize: "18px",
    color: "#333",
  },
  category: {
    color: "#666",
    fontSize: "14px",
    margin: "5px 0",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.4",
    margin: "10px 0",
  },
};

export default function ProductCards() {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const filteredProducts =
    selectedCategory === "Все"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const averagePrice =
    filteredProducts.length > 0
      ? Math.round(
          filteredProducts.reduce((sum, p) => sum + p.price, 0) / filteredProducts.length
        )
      : 0;

  const handleAddToCart = (productName) => {
    alert(`Товар "${productName}" добавлен в корзину!`);
  };

  return (
    <div style={styles.app}>
      <h1>🛒 Магазин техники и книг</h1>

      <div style={styles.categoryFilter}>
        {categories.map((category) => (
          <button
            key={category}
            style={{
              ...styles.button,
              ...(selectedCategory === category ? styles.activeButton : {}),
            }}
            onClick={() => setSelectedCategory(category)}
            onMouseEnter={(e) => {
              if (selectedCategory !== category) {
                e.target.style.backgroundColor = "#e0e0e0";
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== category) {
                e.target.style.backgroundColor = "#f0f0f0";
              }
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div style={styles.productsGrid}>
        {filteredProducts.map((product) => {
          const bgColor = generateColor(product.id);

          return (
            <div key={product.id} style={styles.productCard}>
              <div
                style={{
                  ...styles.productImage,
                  backgroundColor: bgColor,
                  background: `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}80 100%)`,
                }}
              >
                <div style={{ textAlign: "center", padding: "20px" }}>
                  <div style={{ fontSize: "36px", marginBottom: "10px" }}>
                    {product.category === "Электроника"
                      ? "💻"
                      : product.category === "Книги"
                      ? "📚"
                      : "🛒"}
                  </div>
                  <div>{product.category}</div>
                </div>
                {!product.inStock && <div style={styles.outOfStock}>Нет в наличии</div>}
              </div>

              <div style={styles.productInfo}>
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.category}>Категория: {product.category}</p>
                <p style={styles.description}>{product.description}</p>

                <div style={styles.productFooter}>
                  <div style={styles.rating}>
                    {"★".repeat(Math.floor(product.rating))}
                    <span style={styles.ratingNumber}>{product.rating}</span>
                  </div>
                  <div style={styles.price}>{product.price.toLocaleString()} ₽</div>
                </div>

                <button
                  style={{
                    ...styles.buyButton,
                    ...(!product.inStock ? styles.disabledButton : {}),
                  }}
                  disabled={!product.inStock}
                  onClick={() => handleAddToCart(product.name)}
                  onMouseEnter={(e) => {
                    if (product.inStock) {
                      e.target.style.backgroundColor = "#218838";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (product.inStock) {
                      e.target.style.backgroundColor = "#28a745";
                    }
                  }}
                >
                  {product.inStock ? "🛒 Добавить в корзину" : "🚫 Товар закончился"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div style={styles.summary}>
        <h3>📊 Статистика</h3>
        <p>
          <strong>Итого товаров:</strong> {filteredProducts.length}
        </p>
        <p>
          <strong>В наличии:</strong> {filteredProducts.filter((p) => p.inStock).length}
        </p>
        <p>
          <strong>Средняя цена:</strong> {averagePrice.toLocaleString()} ₽
        </p>
        {filteredProducts.length === 0 && (
          <p style={{ color: "#dc3545", fontWeight: "bold" }}>
            🚫 Товаров в выбранной категории не найдено
          </p>
        )}
      </div>
    </div>
  );
}
