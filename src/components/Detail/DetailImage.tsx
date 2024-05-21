import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

interface Props {
  beforeImage: string;
  afterImage: string;
  type: "identity" | "ego";
}

const IdentityImage = ({ beforeImage, afterImage, type }: Props) => {
  return (
    <Card className="bg-primary-450" placeholder="Card">
      <CardBody className="bg-primary-500 mb-5 rounded-md p-3 md:p-6" placeholder="CardBody">
        <p className="text-base md:text-xl font-bold mb-2 md:mb-5 text-white">
          {type === "identity" ? "동기화 전" : "각성"}
        </p>
        <img src={beforeImage} alt="beforeImage" />
      </CardBody>
      <CardBody className="bg-primary-500 rounded-md p-3 md:p-6" placeholder="CardBody">
        <p className="text-base md:text-xl font-bold mb-2 md:mb-5 text-white">
          {type === "identity" ? "동기화 후" : "침식"}
        </p>
        <img src={afterImage} alt="afterImage" />
      </CardBody>
    </Card>
  );
};

export default IdentityImage;
