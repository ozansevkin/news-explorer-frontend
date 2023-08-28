interface ErrorInfo {
  statusCode?: number;
  error?: string;
  message: string;
  validation?: {
    body: {
      source: string;
      keys: string[];
      message: string;
    };
  };
}

class ReponseError extends Error {
  info: ErrorInfo;
  status: number;

  constructor(message: string, info: ErrorInfo, status: number) {
    super(message);
    this.name = "ResponseError";
    this.info = info;
    this.status = status;
  }
}

export default ReponseError;
