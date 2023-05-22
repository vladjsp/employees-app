import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTotalEmployeesAmount, getToIncreaseAmount, getToRiseAmount } from '../../utils';

export interface IEmployeeObj {
  name: string;
  salary: string;
  increase: boolean;
  rise: boolean;
  id: number;
}
const initialState = {
  employeesList: [
    { name: 'Olena L.', salary: '1800', increase: true, rise: true, id: 1 },
    { name: 'Olga C.', salary: '3800', increase: false, rise: true, id: 2 },
    { name: 'Roman K.', salary: '4400', increase: false, rise: false, id: 3 },
    { name: 'Vlad B.', salary: '4600', increase: true, rise: false, id: 4 },
    { name: 'Oleksandr E.', salary: '4200', increase: false, rise: true, id: 5 },
    { name: 'Ruslan L.', salary: '3200', increase: true, rise: false, id: 6 },
    { name: 'Viktoriia A.', salary: '3100', increase: false, rise: false, id: 7 },
  ] as IEmployeeObj[],
  nextId: 8,
  toIncreaseAmount: 0,
  toRiseAmount: 0,
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
      state.toRiseAmount = getToRiseAmount(state.employeesList);
    },
    addEmployee(state, action: PayloadAction<{ name: string; salary: string }>) {
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
      state.toRiseAmount = getToRiseAmount(state.employeesList);
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
      state.toRiseAmount = getToRiseAmount(state.employeesList);
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
