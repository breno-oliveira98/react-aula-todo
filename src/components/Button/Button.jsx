

export const Button = ({children, btnColor}) => {
  return (
    <>
      <button className={`bg-${btnColor} text-white p-1 rounded`}>
        {children}
      </button>
    </>
  );
};
