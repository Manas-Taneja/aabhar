import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string | number;
  imageSrc: string;
  imageAlt: string;
  name: string;
  price: string | number;
}

const ProductCard = ({ product }: { product: Product }) => (
  <Link href={`/pages/products/${product.id}`} className="group">
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
      <Image
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        src={product.imageSrc}
        alt={product.imageAlt}
        className="h-full w-full object-cover object-center group-hover:opacity-75"
      />
      
    </div>
    <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
    <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
  </Link>
);

export default ProductCard;
