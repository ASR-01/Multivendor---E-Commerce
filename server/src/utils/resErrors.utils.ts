import { ErrorCodes, HttpErrors } from "./rootErrors.utils";

export class BadRequestError extends HttpErrors {
  constructor(message: string, errorCode: ErrorCodes,error?:any) {
    super(message, errorCode, 400, error);
  }
}

export class UnprocessableEntity extends HttpErrors {
  constructor(message: string, error: any, errorCode: number) {
    super(message, errorCode, 422, error);
  }
}


export class InternalException extends HttpErrors{
  constructor(message: string, error: any, errorCode: number) {
    super(message, errorCode, 500, error);
  }
}


export class NotFoundError extends HttpErrors{
  constructor(message: string, errorCode: number) {
    super(message, errorCode, 500, null);
  }
}



export class UnAuthorized extends HttpErrors{
  constructor(message: string,errorCode: number) {
    super(message, errorCode, 401, null);
  }
}
