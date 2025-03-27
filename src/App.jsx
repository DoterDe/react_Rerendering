import React from "react";

const Article = ({
  title,
  author,
  text,
  date,
  font = "Arial",
  fontSize = "16px",
  color = "#000",
  background = "#fff",
  image = "",
  layout = "left" // left, right, center
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: layout === "center" ? "column" : "row",
        alignItems: "center",
        background: background,
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "800px",
        margin: "20px auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {image && layout !== "right" && (
        <img
          src={image}
          alt="Article"
          style={{ width: "150px", height: "150px", marginRight: "20px" }}
        />
      )}
      <div style={{ textAlign: layout, fontFamily: font, fontSize: fontSize, color: color }}>
        <h2>{title}</h2>
        <p><strong>{author}</strong> - {date}</p>
        <p>{text}</p>
      </div>
      {image && layout === "right" && (
        <img
          src={image}
          alt="Article"
          style={{ width: "150px", height: "150px", marginLeft: "20px" }}
        />
      )}
    </div>
  );
};

export default Article;
