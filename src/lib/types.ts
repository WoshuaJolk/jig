export interface ReceiptItem {
  id: string;
  name: string;
  price: number;
  assignedTo: string[];
}

export interface Split {
  id: string;
  title: string;
  items: ReceiptItem[];
  people: string[];
  taxPercent: number;
  tipPercent: number;
  subtotal: number;
  venmo: string;
  receiptUrl: string;
  createdAt: string;
}

export interface PersonTotal {
  name: string;
  items: { name: string; price: number; split: number }[];
  itemsTotal: number;
  taxAmount: number;
  tipAmount: number;
  total: number;
}
