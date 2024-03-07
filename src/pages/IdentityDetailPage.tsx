import React, { useState } from "react";
import InfoBox from "@components/InfoBox";
import identity_data from "@constants/identity_detail.json";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Card, CardBody, CardFooter } from "@material-tailwind/react";

const IdentityDetailPage = () => {
  const data = [
    {
      label: "스킬",
      value: "스킬",
      desc: `스킬`,
    },
    {
      label: "패시브",
      value: "패시브",
      desc: `패시브`,
    },
    {
      label: "키워드",
      value: "키워드",
      desc: `키워드`,
    },
  ];

  return (
    <div className="first flex">
      <Tabs value="html" orientation="vertical">
        <div className="flex flex-col md:items-start items-center">
          <InfoBox
            character={identity_data.character}
            name={identity_data.name}
            afterProfileImage={identity_data.afterProfileImage}
            affiliation={identity_data.affiliation}
            grade={identity_data.grade}
            releaseDate={identity_data.releaseDate}
            obtainingMethod={identity_data.obtainingMethod}
            resistance={identity_data.resistance}
            status={identity_data.status}
          />

          <TabsHeader className="w-32" placeholder={"TabsHeader"}>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} placeholder={"Tab"}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
        </div>
        <div>
          <Card placeholder={"Card"}>
            <CardBody placeholder={"CardBody"}>
              <TabsBody placeholder={"TabsBody"}>
                {data.map(({ value, desc }) => (
                  <TabPanel key={value} value={value} className="py-0 w-32">
                    {desc}
                  </TabPanel>
                ))}
              </TabsBody>
            </CardBody>
          </Card>
        </div>
      </Tabs>
    </div>
  );
};

export default IdentityDetailPage;
