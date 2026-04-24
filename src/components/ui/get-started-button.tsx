import { AnimatedButton } from "./animated-button";

export function GetStartedButton({ className = "" }: { className?: string }) {
  return (
    <AnimatedButton className={className} to="/contact">
      Get Started
    </AnimatedButton>
  );
}
