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
