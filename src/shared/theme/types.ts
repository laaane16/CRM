import { Dispatch, SetStateAction } from 'react';

export enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContextProps {
  theme?: string;
  setTheme?: Dispatch<SetStateAction<string>>;
}
