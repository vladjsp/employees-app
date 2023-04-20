import { IEmployeeObj } from '../redux/slices/employeesSlice';

export const getToIncreaseAmount = (list: IEmployeeObj[]) => {
  return list.filter((item) => item.increase === true).length;
};

export const getTotalEmployeesAmount = (data: IEmployeeObj[]) => {
  return data.length;
};
