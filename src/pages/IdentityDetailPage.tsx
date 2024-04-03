import React from "react";
import InfoBox from "@components/InfoBox";
import identity_data from "@constants/identity_detail.json";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Typography } from "@material-tailwind/react";
import IdentitySkills from "@components/IdentitySkills";

const IdentityDetailPage = () => {
  const data = [
    {
      label: "스킬",
      value: "스킬",
      desc: `스킬입니다.`,
    },
    {
      label: "패시브",
      value: "패시브",
      desc: `패시브입니다.`,
    },
    {
      label: "키워드",
      value: "키워드",
      desc: `키워드입니다.`,
    },
    {
      label: "이미지",
      value: "이미지",
      desc: `이미지입니다.`,
    },
  ];

  return (
    <div className="">
      <Tabs value="스킬" orientation="horizontal" className="md:flex ">
        <div className=" flex flex-col md:items-start items-center gap-3 ">
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

          <TabsHeader
            className="w-64 md:flex md:flex-col bg-primary-500 "
            placeholder={"TabsHeader"}
            indicatorProps={{
              className: "bg-primary-300 shadow-none mx-1 ",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                placeholder={"Tab"}
                className="text-primary-100 font-bold md:text-xl text-base p-0 md:p-1"
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
        </div>

        <TabsBody placeholder={"TabsBody"} animate={{ initial: { y: 250 }, mount: { y: 0 }, unmount: { y: 250 } }}>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className=" text-white font-bold md:pl-10">
              <span className="text-4xl text-primary-100">{value}</span>
              <Typography variant="small" className="p-1 " placeholder={desc}>
                {desc}
                {value === "스킬" && (
                  <IdentitySkills
                    identitySkills={{
                      identitySkill1s: identity_data.identitySkill1s.slice(0, 4),
                      identitySkill2s: identity_data.identitySkill2s.slice(0, 4),
                      identitySkill3s: identity_data.identitySkill3s.slice(0, 4),
                      identityDefSkills: identity_data.identityDefSkills.slice(0, 4),
                    }}
                  />
                )}
              </Typography>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default IdentityDetailPage;
