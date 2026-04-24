import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  to?: string;
}

export function AnimatedButton({ children, onClick, className = "", type = "button", to }: AnimatedButtonProps) {
  const sharedClassName = `group flex items-center justify-center relative h-14 px-10 border border-transparent rounded-xl transition-all duration-300 cursor-pointer font-medium text-base ${className}`;
  const sharedStyle = { backgroundColor: 'var(--button-brand-green)', borderColor: 'var(--button-brand-green)', color: '#071F45' };

  if (to) {
    return (
      <Link
        to={to}
        className={sharedClassName}
        style={sharedStyle}
        onClick={onClick}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--button-brand-green-hover)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--button-brand-green)')}
      >
        <span className="transition-opacity duration-300 group-hover:opacity-0">
          {children}
        </span>
        <ChevronRight className="absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} strokeWidth={2} />
      </Link>
    );
  }

  return (
    <button 
      type={type}
      onClick={onClick}
      className={sharedClassName}
      style={sharedStyle}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--button-brand-green-hover)')} 
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--button-brand-green)')}
    >
      <span className="transition-opacity duration-300 group-hover:opacity-0">
        {children}
      </span>
      <ChevronRight className="absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} strokeWidth={2} />
    </button>
  );
}
