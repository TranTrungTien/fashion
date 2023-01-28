import { Divider } from "antd";
import { useParams } from "react-router-dom";
import DetailPromotion from "../components/detail-promotion";
import Footer from "../components/footer";
import Header from "../components/header";
import PreviewProduct from "../components/preview-product";
import ProductComment from "../components/product-comment";
import ProductVoting from "../components/product-voting";
import { womanDresses } from "../data";
import ProductRelative from "../components/product-relative";

const ProductPage = () => {
  const { type, id } = useParams();
  const product = type
    ? womanDresses[type].find((item) => item.id === id)
    : null;

  return (
    <div>
      <Header />
      {product && (
        <div className="container">
          <div className="flex justify-start items-start gap-x-3">
            <PreviewProduct images={product.images} />
            <DetailPromotion {...product} />
          </div>
          <Divider />
          <Divider />
          <ProductRelative type={type} />
          <Divider />
          <ProductVoting title={product.title} />
          <Divider />
          <ProductComment />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProductPage;
