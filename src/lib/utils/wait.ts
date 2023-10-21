export const wait = (milliSecond: number) =>
  new Promise((resolve) => setTimeout(resolve, milliSecond));

export const Await = async <T>({
  promise,
  children,
  delay = 0,
}: {
  promise: Promise<T>;
  children: (value: T) => JSX.Element;
  delay?: number;
}) => {
  await wait(delay); // WARNING: DON'T USE THIS, ONLY FOR DEBUGGING PURPOSE!
  const data = await promise;

  return children(data);
};
