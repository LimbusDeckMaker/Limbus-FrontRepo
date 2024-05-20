import EgoInfoBox from "@components/Detail/Ego/EgoInfoBox";
import ego_data from "@constants/ego_detail.json";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { synchronizationState } from "@recoils/atoms";
import { useRecoilState } from "recoil";
import { Button } from "@material-tailwind/react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import EgoSkills from "@components/Detail/Ego/EgoSkills";
import EgoPassive from "@components/Detail/Ego/EgoPassive";
import Keyword from "@components/Detail/Keyword";
import EgoImage from "@components/Detail/DetailImage";

const EgoDetailPage = () => {
  const [synchronization, setSynchronization] =
    useRecoilState(synchronizationState);

  return (
    <div className="">
      <Tabs value="스킬" orientation="horizontal" className="md:flex ">
        <div className=" flex flex-col md:items-start items-center gap-3 mt-4">
          <EgoInfoBox
            character={ego_data.character}
            name={ego_data.name}
            zoomImage={ego_data.zoomImage}
            grade={ego_data.grade}
            season={ego_data.season}
            resistance={ego_data.resistance}
            releaseDate={ego_data.releaseDate}
            obtainingMethod={ego_data.obtainingMethod}
            cost={ego_data.cost}
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
            <TabPanel
              key={value}
              value={value}
              className=" text-white font-bold md:pl-10"
            >
              <div className="flex justify-between">
                <span className="text-xl md:text-4xl text-primary-100">
                  {value}
                </span>

                {(value === "스킬" || value === "패시브") && (
                  <Button
                    className="flex gap-2 items-center bg-primary-400 px-2 md:px-4 py-0 md:py-1 font-sansLight text-sm md:text-base text-white hover:bg-primary-300 rounded"
                    placeholder={undefined}
                    onClick={() =>
                      setSynchronization({
                        synchronization:
                          (synchronization.synchronization + 1) % 2,
                      })
                    }
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
                  <EgoSkills
                    EgoSkills={{
                      EgoSkill1s: ego_data.egoskills,
                      EgoSkill2s: ego_data.egoCorSkills,
                    }}
                  />
                )}
                {value === "패시브" && (
                  <EgoPassive Egodata={ego_data.passive} />
                )}
                {value === "키워드" && <Keyword keywords={ego_data.keyword} />}
                {value === "이미지" && (
                  <EgoImage
                    type="ego"
                    beforeImage={ego_data.image}
                    afterImage={ego_data.zoomImage}
                  />
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

export default EgoDetailPage;
