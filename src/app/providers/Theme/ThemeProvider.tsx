import { FC, ReactNode, useMemo, useState } from 'react';

import { ThemeContext, Themes } from '../../../shared/theme';

interface Props {
  className?: string;
  children: ReactNode;
}

const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(Themes.LIGHT);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);
  console.log('THEME', theme);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
