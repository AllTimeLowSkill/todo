const Button = ({ title, accent = false, onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`${
        accent ? "bg-sky-500 rounded-[12px] hover:bg-sky-600" : ""
      } px-[16px] py-[8px] text-white duration-150`}
    >
      {title}
    </button>
  );
};

export default Button;
