import { IDataList } from '../redux/slices/employeesSlice';

export const getToIncreaseAmount = (list: IDataList[]) => {
  return list.filter((item) => item.increase === true).length;
};

export const getTotalEmployeesAmount = (data: IDataList[]) => {
  return data.length;
};
