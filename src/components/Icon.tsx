import React from "react";

interface IconProps {
  icon: React.ComponentType<{ className?: string }>;
  link: string;
  name?: string;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, link }) => {
  return (
    <li>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <IconComponent className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
      </a>
    </li>
  );
};

export default Icon;
