import { useEffect, useState } from "react";
import styled from "styled-components";
import { ThemeButton } from "../context";

export default function ThemeToggle() {
  const { activeTheme, setActiveTheme, inactiveTheme }: any = ThemeButton();
  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);

  return (
    <ToggleButton type='button' onClick={() => setActiveTheme(inactiveTheme)}>
      <ToggleThumb theme={activeTheme} />
      <div className="flex gap-2 items-center">
        <div>🌙</div>
        <div className="ml-1">☀️</div>
      </div>
    </ToggleButton>
  );
}

const ToggleButton = styled.button`
  --toggle-width: 80px;
  --toggle-height: 38px;
  --toggle-padding: 4px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 1.4rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: var(--color-bg-toggle);
  transition: 0.25s ease-in-out;
`;

const ToggleThumb = styled.span`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: white;
  transition: transform 0.25s ease-in-out;
  transform: ${(p:any) => p.theme === "dark"
      ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
      : "none"};
`;
