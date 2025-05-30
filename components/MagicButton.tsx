import React from "react";

interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  variant?: "purple" | "default"; // Add variant prop
}

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  variant = "default", // Default variant
}: MagicButtonProps) => {
  const baseClasses = "relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none";
  
  const gradientClasses = variant === "purple" 
    ? "bg-[conic-gradient(from_90deg_at_50%_50%,#8B5CF6_0%,#4C1D95_50%,#8B5CF6_100%)]"
    : "bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]";

  const spanClasses = `inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
    ${variant === "purple" ? "bg-purple-900" : "bg-slate-950"} 
    px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`;

  return (
    <button className={baseClasses} onClick={handleClick}>
      <span className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] ${gradientClasses}`} />
      <span className={spanClasses}>
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;