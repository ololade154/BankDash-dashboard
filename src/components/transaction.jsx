export const Transaction = ({ title, amount }) => {
  return (
    <div
      className="bg-white p-4 rounded-2xl w-full h-40 "
      style={{ borderRadius: '20px' }}
    >
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-xl font-semibold">{amount}</p>
    </div>
  );
};
