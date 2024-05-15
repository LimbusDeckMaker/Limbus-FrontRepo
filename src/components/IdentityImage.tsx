import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

interface Props {
  beforeImage: string;
  afterImage: string;
}

const IdentityImage = ({ beforeImage, afterImage }: Props) => {
  return (
    <Card className=" bg-primary-450" placeholder="Card">
      <CardBody className="bg-primary-500 mb-5 rounded-md" placeholder="CardBody">
        <Typography className="text-xl font-bold mb-5" color="white" placeholder="beforeImage">
          동기화 전
        </Typography>
        <img src={beforeImage} alt="beforeImage" />
      </CardBody>
      <CardBody className="bg-primary-500 rounded-md" placeholder="CardBody">
        <Typography className="text-xl font-bold mb-5" color="white" placeholder="afterImage">
          동기화 후
        </Typography>
        <img src={afterImage} alt="afterImage" />
      </CardBody>
    </Card>
  );
};

export default IdentityImage;
