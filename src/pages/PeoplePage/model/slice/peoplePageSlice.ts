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
  filters: [],
  page: 1,
  limit: 9,
  _inited: false,
});

export const peoplesSelectors = peoplesAdapter.getSelectors<StateSchema>((state) => state.peoples || initialState);

const peoplePageSlice = createSlice({
  name: 'peoples',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filters?.push(action.payload);
    },
    setFilters: (state, action) => {
      state.filters?.push(...action.payload);
    },
    removeFilter: (state, action) => {
      state.filters = state.filters?.filter((i) => i.value !== action.payload.value);
    },
    setView: (state, action) => {
      state.view = action.payload;
      localStorage.setItem(PEOPLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    initState: (state) => {
      const view = localStorage.getItem(PEOPLES_VIEW_LOCALSTORAGE_KEY) as IView;
      state.view = view || IView.GRID;
      state.limit = view === IView.GRID ? 12 : 9;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSort: (state, action) => {
      const { field, order } = action.payload;

      state.sortField = field;
      state.order = order;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeoplesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length === state.limit;
        state._inited = true;
        if (action.meta.arg.replace) {
          peoplesAdapter.setAll(state, action.payload);
          state.page = 1;
        } else {
          peoplesAdapter.addMany(state, action.payload);
          state.page += 1;
        }
      })

      .addCase(fetchPeoplesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })

      .addCase(fetchPeoplesList.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;

        if (action.meta.arg.replace) {
          peoplesAdapter.removeAll(state);
        }
      });
  },
});

export const { actions: peoplesActions } = peoplePageSlice;
export const { reducer: peoplesReducer } = peoplePageSlice;
