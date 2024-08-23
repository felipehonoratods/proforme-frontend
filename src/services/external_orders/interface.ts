export interface ExternalOrder {
    order_number?: number;
    client?: string;
    item: {
      name: string;
      amount: number;
    }[];
    id?: string;
  }