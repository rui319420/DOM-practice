type TextBoxProps = {
  value: string;
  onChange: () => void;
  label?: string;
  placeholder?: string
}

export const TextBox = ({ value, onChange, label, placeholder }: TextBoxProps) => {
  return (
    <div className="textbox">
      {label && <label className="box-label">{label}</label>}
      <input
        type="text"
        className="textBox"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}