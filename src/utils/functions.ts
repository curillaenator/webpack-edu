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

  const d = new Date(date);

  return d.toLocaleString("ru-RU", options);
};

// pages in pagination

type TPagesToShow = (
  page: number,
  totalCnt: number,
  perPage: number
) => number[];
export const pageToShow: TPagesToShow = (page, totalCnt, perPage) => {
  const totalPages = Math.ceil(totalCnt / perPage);
  let initialArray: number[] = new Array(9).fill(1).map((num, i) => num + i);

  if (totalPages <= 9) {
    return new Array(totalPages).fill(1).map((num, i) => num + i);
  }

  if (page > 5) {
    let arr: number[] = [];
    for (let i = page - 4; i < page + 5; i++) {
      arr.push(i);
    }
    return arr;
  }

  if (page + 5 >= totalPages) {
    let arr: number[] = [];
    for (let i = totalPages; i >= totalPages - 9; i--) {
      arr.push(i);
      return arr.reverse();
    }
  }

  return initialArray;
};
