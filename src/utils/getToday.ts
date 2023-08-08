const getToday = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const date = now.getDate().toString().padStart(2, '0');
  const result = `${year}-${month}-${date}`;
  return result;
};

export default getToday;
