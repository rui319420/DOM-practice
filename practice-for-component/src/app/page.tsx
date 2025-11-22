'use client';
import { useState } from "react";
import { Button } from "./components/Button";

export default function Home() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const ButtonClick = () => {
    setIsClicked(true);
  }

  return (
    <div className="container">
      <Button label="押す" onClick={ButtonClick} />
      {isClicked && <p className="text block">ボタンが押された</p>}
    </div>
  );
}
