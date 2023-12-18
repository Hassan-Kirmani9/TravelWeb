import Image from "next/image"

type ButtonProps={

type: "button" | "submit",
title: string,
icon?: string,
variant:"btn_dark_green"
responsiveWidth?: string;

}

// Button component
const Button = ({ type, title, icon, variant, className }) => {
  return (
    <div>
      <button 
        className={`flexCenter h-14 gap-3 rounded-full border ${variant} ${className}`}
        type={type}
      >
        {icon && <Image src={icon} alt={title} width={24} height={24}/>}
        <label>{title}</label>
      </button>
    </div>
  );
};

export default Button;


