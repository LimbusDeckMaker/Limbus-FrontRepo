import React, { useEffect } from "react";
import InfoBox from "@components/InfoBox";
import identity_data from "@constants/identity_detail.json";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import IdentitySkills from "@components/IdentitySkills";
import IdentityPassive from "@components/IdentityPassive";
import IdentityKeyword from "@components/IdentityKeyword";
import IdentityImage from "@components/IdentityImage";
import { synchronizationState } from "@recoils/atoms";
import { useRecoilState } from "recoil";
import { Button } from "@material-tailwind/react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

const IdentityDetailPage = () => {
  const [synchronization, setSynchronization] = useRecoilState(synchronizationState);

  return (
    <div className="">
      <Tabs value="스킬" orientation="horizontal" className="md:flex ">
        <div className=" flex flex-col md:items-start items-center gap-3 mt-4">
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
            {menu.map((value) => (
              <Tab
                key={value}
                value={value}
                placeholder={"Tab"}
                className="text-primary-100 mt-1 font-bold md:text-xl text-base p-0 md:p-1"
              >
                {value}
              </Tab>
            ))}
          </TabsHeader>
        </div>

        <TabsBody
          placeholder={"TabsBody"}
          animate={{
            initial: { y: 0, x: 0 },
            mount: { y: 0, x: 0 },
            unmount: { y: 50, x: 0 },
          }}
        >
          {menu.map((value) => (
            <TabPanel key={value} value={value} className=" text-white font-bold md:pl-10">
              <div className="flex">
                <span className="text-4xl text-primary-100">{value}</span>

                {(value === "스킬" || value === "패시브") && (
                  <Button
                    className="min-w-[140px] flex gap-2 items-center bg-primary-400 px-2 md:px-4 py-0 md:py-1 font-sansLight text-sm md:text-base text-white hover:bg-primary-300 rounded"
                    placeholder={undefined}
                    onClick={() => setSynchronization({ synchronization: (synchronization.synchronization + 1) % 2 })}
                  >
                    <span className="pt-1 whitespace-nowrap">4동기화</span>

                    {synchronization.synchronization ? (
                      <FaCheckCircle className="text-primary-200" />
                    ) : (
                      <FaRegCircle className="text-primary-200" />
                    )}
                  </Button>
                )}
              </div>

              <div className="py-1 ">
                {value === "스킬" && (
                  <IdentitySkills
                    identitySkills={{
                      identitySkill1s: identity_data.identitySkill1s,
                      identitySkill2s: identity_data.identitySkill2s,
                      identitySkill3s: identity_data.identitySkill3s,
                      identityDefSkills: identity_data.identityDefSkills,
                    }}
                  />
                )}
                {value === "패시브" && <IdentityPassive identityPassives={identity_data.identityPassives} />}
                {value === "키워드" && <IdentityKeyword keywords={identity_data.keyword} />}
                {value === "이미지" && (
                  <IdentityImage beforeImage={identity_data.beforeImage} afterImage={identity_data.afterImage} />
                )}
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

const menu = ["스킬", "패시브", "키워드", "이미지"];

export default IdentityDetailPage;
