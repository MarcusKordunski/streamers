import "./label.css";

export default function Label({ className, htmlFor, children }) {
  return (
    <label className={`label ${className}`} htmlFor={htmlFor}>
      {children}
    </label>
  );
}
