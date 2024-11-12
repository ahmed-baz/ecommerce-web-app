import { product } from './product.model';

export class Category {
  id: number;
  categoryName: string;
  products: product[] = [];
  isDeleting: boolean = false;
  constructor() {}
}
