"use client";
import React from "react";

function Button({
  icon,
  children,
  tailwind,
  onClick,
}: {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  tailwind?: string;
  onClick?: () => void;
}) {
  const base = "h-[40px] pt-3 pr-4 pb-3 pl-4 ";
  return (
    <div>
      <button className={base + tailwind} onClick={onClick}>
        {icon && icon}
        {children}
      </button>
    </div>
  );
}

export default Button;
