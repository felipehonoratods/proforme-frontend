export interface Order {
  order_number: string;
  client: string;
  deadline: string;
  created_at: string;
  items: number;
  amount: number;
  amount_pieces: number;
  observations: string | null;
  mp_status: number;
  cut_status: number;
  stamping: number;
  chain_stitch_status: number;
  needlework_status: number;
  finishing_status: number;
  delivery_status: number;
  mp_finished_at: string | null;
  cut_finished_at: string | null;
  stamping_finished_at: string | null;
  chain_stitch_finished_at: string | null;
  needlework_finished_at: string | null;
  finishing_finished_at: string | null;
  delivery_finished_at: string | null;
  _id: string;
}

export interface OrderCreated {
  order_number?: number;
  client?: string;
  deadline?: Date;
  observations?: string;
  amount?: number;
  created_at?: Date;
  amount_pieces?: number;
  items?: number;
  _id?: string;
  mp_status?: number;
  cut_status?: number;
  stamping?: number;
  chain_stitch_status?: number;
  needlework_status?: number;
  finishing_status?: number;
  delivery_status?: number;
  mp_finished_at?: string;
  cut_finished_at?: string;
  stamping_finished_at?: string;
  chain_stitch_finished_at?: string;
  needlework_finished_at?: string;
  finishing_finished_at?: string;
  delivery_finished_at?: string;
}
