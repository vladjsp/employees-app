export const getToIncreaseAmount = (list) => {
  return list.filter((item) => item.increase === true).length;
};

export const getTotalEmployeesAmount = (data) => {
  return data.length;
};
