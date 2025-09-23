import type { MouseEvent } from "react";

export const smoothScrollTo = (elementId: string, offset: number = 100) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const handleScrollClick = (
  e: MouseEvent<HTMLElement>,
  targetId: string,
  offset: number = 100
) => {
  e.preventDefault();
  smoothScrollTo(targetId, offset);
};
