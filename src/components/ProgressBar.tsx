import { ReactNode } from "react";
import styled from "styled-components";

interface ProgressBarProps {
  logo: ReactNode;
  name: string;
  value: number;
  duration?: number;
}

const ProgressBar = ({ logo, name, value, duration = 3 }: ProgressBarProps) => {
  const width = `${value}%`;

  return (
    <div className="flex flex-col gap-2 sm:gap-1 text-xl font-semibold ">
      <div className="flex justify-between">
        <p className="text-[1.15rem] flex items-center gap-3 sm:text-[1rem] exsm:text-sm exsm:gap-3">
          {logo} {name}
        </p>
      </div>
      <div className="h-[8px] w-[100%] relative rounded-3xl bg-gray-300">
        <Progress
          className="w-[0%] h-[8px] absolute rounded-3xl bg-yellow-500 dark:bg-yellow-600"
          width={width}
          style={{
            width: `${value}%`,
            animation: `progress-animation ${duration}s linear`,
          }}
        ></Progress>
      </div>
    </div>
  );
};

export default ProgressBar;

interface ProgressProps {
  width?: string;
}

const Progress = styled.div<ProgressProps>`
  @keyframes progress-animation {
    from {
      width: 0%;
    }
    to {
      width: ${(props) => props.width || "0%"}; // Handle optional width
    }
  }
`;
