export default function Button({ children, className , onClick }) {
  return (
    <button
      className={className}
      onClick={onClick ? onClick : undefined} 
    >
      {children}
    </button>
  );
}
