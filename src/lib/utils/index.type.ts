const errorCodes = [400, 401, 403, 404, 500, 501, 502, 503] as const;
const successCodes = [200, 201, 204] as const;

export type SuccessResponse<T> = {
  message: string;
  data: T;
  status: 'success';
  statusCode: (typeof successCodes)[number];
};

type ErrorResponse = {
  message: string;
  error: string;
  statusCode: (typeof errorCodes)[number];
};

export type FetchResponse<T> = SuccessResponse<T> | ErrorResponse;
