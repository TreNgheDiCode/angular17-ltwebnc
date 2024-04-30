import { Category } from './category.model';

export class Product {
  id?: string;
  name?: string;
  price?: number;
  image?: string;
  description?: string;
  color?: string;
  // Relation: Category
  category?: Category;
}
