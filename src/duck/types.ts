export interface AppState<T> {
  loading: boolean;
  data: T[] | null;
  error: any;
}

export interface Action {
  type: string;
  payload?: any;
}

export interface Product {
  id: number | string;
  name: string;
  alias: string;
  price: number;
  description: string;
  size: string;
  shortDescription: string;
  quantity: number;
  deleted: boolean;
  categories: string;
  relatedProducts: string;
  feature: boolean;
  image: string;
}

export interface Response<T> {
  statusCode: number;
  message: string;
  content: T[];
}

export interface Result<T> {
  data: Response<T>;
  status: number;
  statusText: string;
}
