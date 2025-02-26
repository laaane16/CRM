import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEmployee } from '../../../../entities/Employee/ui/EmployeesCard/EmployeesCard';
import { IView, PeoplesSchema } from '../types/PeoplesSchema';
import { StateSchema } from '../../../../app/providers';
import { fetchPeoplesList } from '../services/fetchPeoplesList/fetchPeoplesList';
import { PEOPLES_VIEW_LOCALSTORAGE_KEY } from '../../../../shared/constants/localstorage';

const peoplesAdapter = createEntityAdapter<IEmployee, number>({ selectId: (people) => people.id });

const initialState = peoplesAdapter.getInitialState<PeoplesSchema>({
  ids: [],
  entities: {},
  view: IView.LIST,
  hasMore: true,
  isLoading: false,
  page: 1,
  limit: 9,
});

export const peoplesSelectors = peoplesAdapter.getSelectors<StateSchema>((state) => state.peoples || initialState);

const peoplePageSlice = createSlice({
  name: 'peoples',
  initialState,
  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
      localStorage.setItem(PEOPLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    initState: (state) => {
      const view = localStorage.getItem(PEOPLES_VIEW_LOCALSTORAGE_KEY) as IView;
      state.view = view || IView.GRID;
      state.limit = view === IView.GRID ? 12 : 18;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeoplesList.fulfilled, (state, action: PayloadAction<IEmployee[]>) => {
        state.isLoading = false;
        state.page += 1;
        peoplesAdapter.addMany(state, action.payload);
        state.hasMore = action.payload.length === state.limit;
      })

      .addCase(fetchPeoplesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })

      .addCase(fetchPeoplesList.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
      });
  },
});

export const { actions: peoplesActions } = peoplePageSlice;
export const { reducer: peoplesReducer } = peoplePageSlice;
