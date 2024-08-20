export function TeamCard({ children }) {
  return (
    <div className="text-blue-400 font-bold flex justify-center items-center text-center text-xl rounded-lg p-5 bg-gray-900 flex-col w-40 h-40 m-1.5 shadow-lg shadow-blue-900/70 transition-colors duration-300 ease-in-out hover:bg-white/10 cursor-pointer">
      {children}
    </div>
  );
}
