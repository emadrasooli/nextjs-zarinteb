import { ReactNode } from "react";

interface MotionStaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function MotionStagger({
  children,
  className,
}: MotionStaggerProps) {
  return <div className={className}>{children}</div>;
}

export function MotionStaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

