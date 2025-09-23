import { ProductType } from "@/types";
import Image from "next/image";

const product: ProductType = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  price: 39.9,
  sizes: ["s", "m", "l", "xl", "xxl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  },
};

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise <{ id: string }>;
  searchParams :  Promise <{ color?: string; size?: string }>;
}) => {

    const {color , size} = await searchParams 
    const selectedSize = (size || product.sizes[0] as string);
    const selectedColor = (color || product.colors[0] as string);
  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image
          src={product.images[product.colors[0]]}
          alt="productImage"
          className="object-cover rounded-md"
          fill
        />
      </div>
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
      <h1 className="text-2xl font-medium">{product.name}</h1>
      <p className="text-gray-500">{product.description}</p>
      <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>
      <div className="flex items-center gap-2 mt-4">
           <Image src="/Klarna.png" alt="Klarna" width={50} height={25} className="rounded-md"/>
            <Image src="/cards.png" alt="Cards" width={50} height={25} className="rounded-md"/>
            <Image src="/stripe.png" alt="Klarna" width={50} height={25} className="rounded-md"/>
      </div>
      <p className="text-gray-500 text-xs">
        By clicking the "Add to Cart" button, you agree to our{" "}
        <span className="text-blue-600 cursor-pointer">Terms of Service</span> and{" "}
        <span className="text-blue-600 cursor-pointer">Privacy Policy</span>.
      </p>
      </div>
    </div>
  );
};

export default ProductPage;
