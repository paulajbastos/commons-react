"use client";
import Button from "@/components/Buttons";
import styles from "./page.module.css";

export default function Home() {
  const handleButtonClick = () => {
    alert("handleButtonClick");
  };

  return (
    <main className={styles.main}>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className={styles.item}>
            <h1>Default:</h1>
            <Button onClick={handleButtonClick}>I'm a Button</Button>
          </div>
          <div className="item">
            <h1>As Link:</h1>
            <Button href="/">I'm a Link</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
