


export interface GeneralResponse<T> {
  statusCode: number;
  message:    string;
  response:   T;
}

export interface User {
  sharedKey:  string;
  businessId: string;
  email:      string;
  phone:      string;
  createdAt?: string;
  verified?:  boolean;
}

