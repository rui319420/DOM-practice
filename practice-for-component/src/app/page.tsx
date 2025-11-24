'use client';
import { useState } from "react";
import { Button } from "./components/Button";
import { TextBox } from "./components/TextBox";

export default function Home() {
  const [message, setMessage] = useState<string>("")
  const [serverResponse, setServerResponse] = useState<string>("")

  const ButtonClick = async () => {
    try {
      const res = await fetch('/api/echo', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: message }),
      });
      const data = await res.json();
      setServerResponse(data.reply)
    }
    catch (error) {
      console.log("エラーが発生しました", error);
    }
  };

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
        {serverResponse && (
        <p className="text-block" style={{ marginTop: '20px', color: 'blue' }}>
          {serverResponse}
        </p>
        )}
      </div>
    </div>
  );
}
