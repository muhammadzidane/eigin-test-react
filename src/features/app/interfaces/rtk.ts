export interface IRTKPayload<T, I = unknown> {
  body?: T;
  query?: I;
}

export interface IParam {
  sources: string;
  q: string | null;
}

export interface IAppParams {
  params: IParam;
}
