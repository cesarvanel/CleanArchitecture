export interface useCase <TRequest, TResponse> {
  execute: (request: TRequest) => Promise<TResponse>
};
