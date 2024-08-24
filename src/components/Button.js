export function Button({ className, what, onClick }) {
  return (
    <button
      className={`bg-gradient-to-r from-start to-end font-extralight p-2 rounded-md w-36 transform transition-transform duration-300 hover:-translate-y-2 ${className}`}
      onClick={onClick}
    >
      {what}
    </button>
  );
}
