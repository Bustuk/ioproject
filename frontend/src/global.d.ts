// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GetElementType<T extends any[]> = T extends (infer U)[] ? U : never;
type careType = 'skin' | 'hair';
interface skinProduct {
  product_type: string;
  oily: boolean;
  normal: boolean;
  product_id: number;
  product_brand: string;
  dry: boolean;
  product_name: string;
  image_link: string;
}

interface hairProduct {
  straight: boolean;
  product_name: string;
  curly: boolean;
  fine: boolean;
  thick: boolean;
  image_link: string;
  product_type: string;
  wavy: boolean;
  product_brand: string;
  coily: boolean;
  medium: boolean;
  product_id: number;
}

type Product = skinProduct | hairProduct;

interface Routine {
  id: string;
  name: string;
  type: string;
  products?: Product[];
  done: string[]; // YYYY/MM/DD format
}

interface Meta {
  totalCount: number;
}

type days =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Satruday'
  | 'Sunday';
type dayNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;