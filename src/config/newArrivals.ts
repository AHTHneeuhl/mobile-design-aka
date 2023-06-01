import bag from "assets/images/bag.png";
import shoe from "assets/images/shoe.png";

export interface TProduct {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ratings: number;
  reviews: number;
  quantity: number;
  image: string;
  price: number;
  favorite: boolean;
}

const newArrivals: TProduct[] = [
  {
    id: 1,
    title: "The Marc Jacobs",
    subtitle: "Traveler Tote",
    description:
      "Get a little lift from these Sam Edelman sandals featuring ruched straps and leather lace-up ties, while a braided jute sole makes a fresh statement for summer.",
    ratings: 5,
    reviews: 117,
    quantity: 1,
    image: bag,
    price: 195.0,
    favorite: true,
  },
  {
    id: 2,
    title: "Axel Arigato",
    subtitle: "Clean 90 Triple Sneakers",
    description:
      "Get a little lift from these Sam Edelman sandals featuring ruched straps and leather lace-up ties, while a braided jute sole makes a fresh statement for summer.",
    ratings: 4,
    reviews: 317,
    quantity: 1,
    image: shoe,
    price: 245.0,
    favorite: false,
  },
];

export default newArrivals;
