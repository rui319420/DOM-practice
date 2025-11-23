type ButtonProps = {
  label: string;
  onClick: () => void;
}

export const Button = ({label, onClick}: ButtonProps) => {
  return (
    <div>
    <p>ボタン</p>
    <button className="button"onClick={onClick}>
      {label}
      </button>
    </div>
  )
}
