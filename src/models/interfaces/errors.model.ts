export class NetworkError extends Error {}
export class UnAuthonticatedError extends Error {}
export class ForbiddenError extends Error {}
export class NotFoundError extends Error {}
export class InternalServerError extends Error {}
export class ConfilctError extends Error {}
export class BadRequestError extends Error {}
export class UnprocessabelEntityError extends Error {}

export type HttpError = NetworkError | UnAuthonticatedError | ForbiddenError | BadRequestError | NotFoundError | UnprocessabelEntityError | ConfilctError | InternalServerError;