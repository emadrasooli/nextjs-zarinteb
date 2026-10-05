import { ReactNode } from "react";

interface MotionFadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function MotionFadeIn({
  children,
  className,
}: MotionFadeInProps) {
  return <div className={className}>{children}</div>;
}

