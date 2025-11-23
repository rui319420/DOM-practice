type TextBoxProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
}

export const TextBox = ({ value, onChange, label, placeholder }: TextBoxProps) => {
  return (
    <div className="textbox">
      {label && <label className="box-label">{label}</label>}
      <input
        type="text"
        className="input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}