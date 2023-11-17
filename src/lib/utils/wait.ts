import { FetchResponse } from './index.type';

export const wait = (milliSecond: number) =>
  new Promise((resolve) => setTimeout(resolve, milliSecond));

export const Await = async <T>({
  promise,
  children,
  delay = 0,
  _DEV,
}: {
  promise: Promise<T>;
  children: (value: T) => JSX.Element;
  delay?: number;
  _DEV?: boolean;
}) => {
  await wait(delay); // WARNING: DON'T USE THIS, ONLY FOR DEBUGGING PURPOSE!
  const response = (await promise) as FetchResponse<T>;

  if (_DEV) {
    return children(response as T);
  }

  if (response.statusCode === 200) {
    return children(response.data);
  }

  throw new Error(response.message);
};
