const Button = ({ children, type, handler }) => {
  const style =
    type === "danger"
      ? "bg-red-500 text-white px-3 py-1 rounded shadow"
      : "bg-blue-500 text-white px-3 py-1 rounded shadow";
  return (
    <button className={style} onClick={handler}>
      {children}
    </button>
  );
};

export default Button;
