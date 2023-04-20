import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTotalEmployeesAmount, getToIncreaseAmount } from '../../utils';

export interface IDataList {
  name: string;
  salary: number;
  increase: boolean;
  rise: boolean;
  id: number;
}
const initialState = {
  employeesList: [
    { name: 'Robert L.', salary: 1800, increase: true, rise: true, id: 1 },
    { name: 'John C.', salary: 3800, increase: false, rise: true, id: 2 },
    { name: 'Carlos K.', salary: 4400, increase: false, rise: false, id: 3 },
    { name: 'Carl B.', salary: 4600, increase: true, rise: false, id: 4 },
    { name: 'Carla E.', salary: 4200, increase: false, rise: true, id: 5 },
    { name: 'Clark L.', salary: 3200, increase: true, rise: false, id: 6 },
    { name: 'Jonathan A.', salary: 3100, increase: false, rise: false, id: 7 },
  ] as IDataList[],
  nextId: 8,
  toIncreaseAmount: 0,
  totalEmployeesAmount: 0,
  searchValue: '',
  filter: 'all',
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    initStateChanger(state) {
      state.totalEmployeesAmount = getTotalEmployeesAmount(state.employeesList);
      state.toIncreaseAmount = getToIncreaseAmount(state.employeesList);
    },
    addEmployee(state, action: PayloadAction<{ name: string; salary: number }>) {
      console.log('addEmployee action.payload', action.payload);

      const newItem = {
        name: action.payload.name,
        salary: action.payload.salary,
        increase: false,
        rise: false,
        id: state.nextId,
      };
      state.employeesList.push(newItem);
      state.nextId++;
      state.totalEmployeesAmount = getTotalEmployeesAmount(state.employeesList);
    },
    deleteEmployee(state, action: PayloadAction<number>) {
      state.employeesList = state.employeesList.filter((item) => item.id !== action.payload);
      state.totalEmployeesAmount = getTotalEmployeesAmount(state.employeesList);
      state.toIncreaseAmount = getToIncreaseAmount(state.employeesList);
    },
    onToggleProp(state, action: PayloadAction<{ id: number; prop: string }>) {
      state.employeesList = state.employeesList.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            [action.payload.prop]: !item[action.payload.prop as keyof typeof item],
          };
        }
        return item;
      });
      state.toIncreaseAmount = getToIncreaseAmount(state.employeesList);
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const {
  initStateChanger,
  addEmployee,
  deleteEmployee,
  onToggleProp,
  setSearchValue,
  setFilter,
} = employeesSlice.actions;

export default employeesSlice.reducer;
