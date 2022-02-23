enum StatusCode {
  OK = 200,
  CREATED,
  NO_CONTENT = 204,
  UNAUTHORIZED = 401,
  BAD_REQUEST = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export default StatusCode;