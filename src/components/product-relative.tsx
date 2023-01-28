import React from "react";
import ProductCard from "./product-card";
import { womanDresses } from "../data";

const ProductRelative = ({ type }: { type?: string }) => {
  const products = type
    ? womanDresses[type]
        .slice(womanDresses[type].length - 4, womanDresses[type].length)
        .map((item) => ({
          id: item.id,
          title: item.title,
          previewImageLink: item.images[0],
          priceSaleOff: item.priceSaleOff,
          originalPrice: item.originalPrice,
          detail: item.detail,
          type: type,
        }))
    : null;
  console.log({ products });

  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold">Sản phẩm tương đương</h1>
      </div>
      <div>
        <div className="row grid grid-cols-4 gap-x-2 mt-6">
          {products?.map((item, index) => (
            <ProductCard {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductRelative;
