import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import i18nForTests from '../../../configs/i18n/i18nForTests';
import { StateSchema, StoreProvider } from '../../../../app/providers';
import { ReducersMapObject } from '@reduxjs/toolkit';

export interface componentRenderOptions {
  route?: string;
  initialState?: StateSchema;
  asyncReducers?: ReducersMapObject<StateSchema>;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  const { route = '/', initialState } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState} asyncReducers={options.asyncReducers}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
}
