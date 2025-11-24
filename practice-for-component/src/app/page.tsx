'use client';
import { useState } from "react";
import { Button } from "./components/Button";
import { TextBox } from "./components/TextBox";

export default function Home() {
  // const [isClicked, setIsClicked] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("")
  const [serverResponse, setServerResponce] = useState<string>("")

  // const ButtonClick = () => {
  //   setIsClicked(true);
  // }

  return (
    <div>
      <p>コンテナ</p>
      <div className="container">
        <TextBox
          label="テキストボックス"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="ここにテキストを入力"
        />
        <Button label="押す" onClick={ButtonClick} />
        {/* {isClicked && <p className="text block">ボタンが押された</p>} */}
        {serverResponse && (
        <p className="text-block" style={{ marginTop: '20px', color: 'blue' }}>
          {serverResponse}
        </p>
        )}
      </div>
    </div>
  );
}
