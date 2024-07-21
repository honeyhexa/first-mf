import { type ReactNode } from "react";
import { Button as UIButton } from "./components/ui/button"

export function Button({
  title,
  children,
  href,
}: {
  title?: string;
  children?: ReactNode;
  href?: string;
}): JSX.Element {
  return (
    <UIButton>Click</UIButton>
  );
}
