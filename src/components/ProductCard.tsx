import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type ProductCardProps = {
  name: string;
  price: number;
  description: string;
  image: string;
};

export function ProductCard({ name, price, description, image }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl border-0 shadow-md">
      <div className="relative h-52 w-full overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-white/90 rounded-full px-3 py-1 text-sm font-bold text-red-600">
          {price} ₽
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
        <button className="mt-4 w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-xl transition-all active:scale-95">
          Заказать
        </button>
      </CardContent>
    </Card>
  );
}