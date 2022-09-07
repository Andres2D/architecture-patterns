export interface Message {
  message: string;
}

export interface Action {
  type: string;
  payload?: any;
}

export interface BaseEntity {
  id: string | number | null;
}

export interface Widget extends BaseEntity {
  description: string;
  price: number;
  title: string;
}
