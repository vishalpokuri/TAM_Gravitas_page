export function Button({ className, what }) {
  return (
    <button
      className={`bg-gradient-to-r from-start to-end font-extralight p-2 rounded-md w-36 transform transition-transform duration-300 hover:-translate-y-2 ${className}`}
    >
      {what}
    </button>
  );
}
