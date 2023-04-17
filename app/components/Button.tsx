'use client'

import { IconType } from "react-icons/lib/esm/iconBase";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  small,
  icon:Icon,
  outline,
}) => {
  return (
    <button
    onClick={onClick}
    disabled={disabled}
      className={`relative  disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${
        outline ? "bg-white text-black border-black" : "bg-rose-500 text-white border-rose-500"
      }
      ${small ? "py-1 text-sm font-light border-[1px]" : 'py-3 text-md font-semibold border-2'}`}
    >
        {Icon && (<Icon size={24} className='absolute top-3 left-4' />)}
      {label}
    </button>
  );
};

export default Button;
