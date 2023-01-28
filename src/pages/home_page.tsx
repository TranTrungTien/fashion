import { useEffect } from "react";
import Banner from "../components/banner";
import Category from "../components/category-row";
import Footer from "../components/footer";
import Header from "../components/header";
import HotDeal from "../components/hot-deal";
import SaleOff from "../components/sale-off";
import { IProductCard } from "../intefaces";
import { womanDresses } from "../data";
import { uuid } from "../utils";

const HomePage = () => {
  const coats = womanDresses.coats;
  const coatsDatas = coats.slice(0, 4).map((item) => ({
    id: item.id,
    type: "coats",
    title: item.title,
    previewImageLink: item.images[0],
    priceSaleOff: item.price,
    originalPrice: item.originalPrice,
    detail: item.detail,
  }));
  const tShirt = womanDresses["t-shirt"];
  const tShirtDatas = tShirt.slice(0, 4).map((item) => ({
    id: item.id,
    type: "t-shirt",
    title: item.title,
    previewImageLink: item.images[0],
    priceSaleOff: item.price,
    originalPrice: item.originalPrice,
    detail: item.detail,
  }));
  const trouser = womanDresses.trousers;
  const trousersDatas = trouser.slice(0, 4).map((item) => ({
    id: item.id,
    type: "trousers",
    title: item.title,
    previewImageLink: item.images[0],
    priceSaleOff: item.price,
    originalPrice: item.originalPrice,
    detail: item.detail,
  }));

  return (
    <div>
      <Header />
      <Banner />
      <HotDeal />
      <Category
        label="Áo Khoác"
        bannerImageLink={[
          "http://dongphucvietanhtuan.com/thumbs/920x257x1/upload/product/ao-khoac-8428.png",
          "https://cdn.pancake.vn/1/s1382x606/04/3a/00/1a/739433415d2e1133f721616966f3ab665dff43fc684e336bdc1d1a85.jpg",
        ]}
        product={coatsDatas}
      />
      <SaleOff />
      <Category
        label="T-Shirt"
        bannerImageLink={[
          "http://file.hstatic.net/1000058447/collection/banner.slider.desktop.aothun.2022.02.19_e81bc3576846437b90b5ac6e889c0029.jpg",
          "https://dotilo.com/image/cache/catalog/polobanner-1903x1129-0.jpg",
        ]}
        product={tShirtDatas}
      />
      <Category
        label="Quần"
        bannerImageLink={[
          "https://jeany.vn/wp-content/uploads/2021/05/banner-quan-jean-rach-jeany-vn.jpg",
          "https://thoitrangglorious.com/wp-content/uploads/2020/10/banner-thoi-trang-nu.jpg",
        ]}
        product={trousersDatas}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
