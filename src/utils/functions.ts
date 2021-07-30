// format date from string

interface IOptions {
  year: "numeric" | "2-digit" | undefined;
  month: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
  day: "numeric" | "2-digit" | undefined;
}
export const date = (date: string) => {
  const options: IOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dateObj = new Date(date);

  return dateObj.toLocaleString("ru-RU", options);
};

// format number

export const number = (value: number | string): string => {
  return new Intl.NumberFormat("ru-RU").format(+value);
};

// string to uppercase

export const uppecase = (value: string): string => {
  return value.trim().toUpperCase();
};

// following pages in pagination

type TPagesToShow = (
  page: number,
  totalPages: number,
  length: number
) => number[];

export const pageToShow: TPagesToShow = (page, totalPages, length) => {
  const initialArray: number[] = new Array(length).fill(1).map((n, i) => n + i);
  const arr: number[] = [];

  const left = Math.floor(length / 2);
  const right = length % 2 > 0 ? Math.ceil(length / 2) : length / 2;

  if (totalPages <= length) {
    return new Array(totalPages).fill(1).map((num, i) => num + i);
  }

  if (page + right >= totalPages) {
    for (let i = totalPages; i > totalPages - length; i--) arr.push(i);
    return arr.reverse();
  }

  if (page > left) {
    for (let i = page - left; i < page + right; i++) arr.push(i);
    return arr;
  }

  return initialArray;
};
