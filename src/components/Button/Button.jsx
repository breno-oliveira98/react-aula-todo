

export const Button = ({children}) => {
  return (
    <>
      <button className="bg-[--primary] text-white p-1 rounded">
        {children}
      </button>
    </>
  );
};
