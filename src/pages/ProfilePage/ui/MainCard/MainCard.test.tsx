import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MainCard from './MainCard';
import { componentRender } from '../../../../shared/lib';
import { profileReducer } from '../../../../entities/Profile';
import { StateSchema } from '../../../../app/providers';
import { ReducersMapObject } from '@reduxjs/toolkit';

const asyncReducers = {
  profile: profileReducer,
} as ReducersMapObject<StateSchema>;

describe('MainCard.test', () => {
  test("user can't edit card", () => {
    componentRender(<MainCard canEdit={false} isLoading={false} />);

    expect(screen.getByTestId('main-card')).toBeInTheDocument();
    expect(screen.queryByTestId('MainCard.EditorModeDropdown')).toBeNull();
  });

  test('user can edit card', () => {
    componentRender(<MainCard canEdit={true} isLoading={false} />);

    expect(screen.getByTestId('main-card')).toBeInTheDocument();
    expect(screen.getByTestId('MainCard.EditorModeDropdown')).toBeInTheDocument();
  });

  // test('validation', async () => {
  //   componentRender(<MainCard canEdit={true} isLoading={false} />, {
  //     asyncReducers,
  //   });

  //   expect(screen.getByTestId('main-card')).toBeInTheDocument();

  //   const EditorModeDropdown = screen.getByTestId('MainCard.EditorModeDropdown');
  //   const onEditorModeDropdownItem = screen.getByTestId('MainCard.onEditorMode');

  //   await userEvent.click(EditorModeDropdown);
  //   await userEvent.click(onEditorModeDropdownItem);

  //   expect(screen.findByTestId('MainCard.InputNumber')).toBeInTheDocument();
  // });
});
