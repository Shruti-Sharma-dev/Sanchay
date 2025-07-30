export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center px-4 py-2 bg-emerald-500 text-white text-sm font-medium rounded-md hover:bg-emerald-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
