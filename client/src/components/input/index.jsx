const InputControl = ({
  placeholder,
  type = "text",
  onChange,
  value,
  sx = null,
}) => {
  if (type === "textarea") {
    return (
      <textarea
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className={`w-full px-[14px] py-[8px] border-2 border-solid border-slate-800 text-slate-800 rounded-[12px] block ${
          sx
            ? Object.keys(sx)
                .map((key) => sx[key])
                .join(" ")
            : ""
        }`}
        rows="10"
        type={type}
        placeholder={placeholder}
      />
    );
  }
  return (
    <input
      onChange={(e) => onChange(e.target.value)}
      value={value}
      className={`px-[14px] py-[8px] border-2 border-solid border-slate-800 text-slate-800 rounded-[12px] block ${
        sx
          ? Object.keys(sx)
              .map((key) => sx[key])
              .join(" ")
          : ""
      }`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputControl;
