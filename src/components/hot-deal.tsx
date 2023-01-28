import { womanDresses } from "../data";
import { uuid } from "../utils";
import ProductCard from "./product-card";

const HotDeal = () => {
  const products = womanDresses.dresses;
  const hotProducts = products.slice(0, 4).map((item) => ({
    id: item.id,
    title: item.title,
    previewImageLink: item.images[0],
    priceSaleOff: item.price,
    originalPrice: item.originalPrice,
    detail: item.detail,
    type: "dresses",
  }));
  return (
    <section className="mt-10 product-area li-laptop-product Special-product pt-60 pb-45">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="li-section-title">
              <h2>
                <span>Bán chạy nhất</span>
              </h2>
            </div>
            <div className="row grid grid-cols-4">
              {hotProducts.map((product, index) => (
                <ProductCard {...product} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotDeal;
