export interface Menu {
	date: string;
  menuItems: {
    title: string;
    description: string;
    price: number;
  }[];
}