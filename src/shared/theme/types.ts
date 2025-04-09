import { Dispatch, SetStateAction } from 'react';

export enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
  PINK = 'pink',
}

export interface ThemeContextProps {
  theme?: Themes;
  setTheme?: Dispatch<SetStateAction<Themes>>;
}
