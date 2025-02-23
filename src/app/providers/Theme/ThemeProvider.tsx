import { FC, ReactNode, useMemo, useState } from 'react';

import { ThemeContext, Themes } from '../../../shared/theme';
import { THEME_LOCALSTORAGE_KEY } from '../../../shared/constants/localstorage';

interface Props {
  className?: string;
  children: ReactNode;
}

const ThemeProvider: FC<Props> = ({ children }) => {
  const defaultValue = localStorage.getItem(THEME_LOCALSTORAGE_KEY) || Themes.LIGHT;

  const [theme, setTheme] = useState(defaultValue);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
