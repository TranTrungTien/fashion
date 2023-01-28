import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import React, { useRef } from "react";

type IProps = {
  images: string[];
};

const PreviewProduct = ({ images }: IProps) => {
  const carouselRef = useRef<null | CarouselRef>(null);
  const goTo = (index: number) => {
    carouselRef.current?.goTo(index);
  };
  return (
    <div className="max-w-[45%]">
      <div className="">
        <div className="mr-5">
          <Carousel ref={carouselRef} dots={false}>
            {images.map((image, index) => (
              <div key={index} className="w-full overflow-hidden rounded">
                <img
                  className="w-full h-auto object-cover object-center"
                  src={image}
                  alt=""
                />
              </div>
            ))}
          </Carousel>
          <div className="grid grid-cols-4 gap-2 mt-10">
            {images.map((image, index) => (
              <div
                key={index}
                className="border border-[#888] max-w-[124px] max-h-[124px]  min-w-[124px] min-h-[124px] hover:bg-[#aaa] cursor-pointer rounded overflow-hidden rounded-md"
                onClick={() => goTo(index)}
              >
                <img src={image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewProduct;
