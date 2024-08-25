export const dateText = (value: Date) => {
  const data = new Date(value);
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
};

export const calcDateDifference = (dataOne: string, dateTwo: string) => {
  const dateInitial: Date = new Date(dataOne);
  const dateFinal: Date = new Date(dateTwo);
  const diffTime: number = dateInitial.getTime() - dateFinal.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};
