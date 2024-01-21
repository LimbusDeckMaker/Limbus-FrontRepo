import React from "react";

import {
  Dialog,
  DialogBody,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

interface Props {
  open: boolean;
  handler: () => void;
}

const KeywordModal = ({ open, handler }: Props) => {
  return (
    <Dialog
      size="sm"
      color="indigo"
      placeholder={undefined}
      open={open}
      handler={handler}
    >
      <DialogBody className="text-sm font-title" placeholder={undefined}>
        <Tabs>
          <TabsHeader placeholder={undefined}>
            <Tab key="전투" value="전투" placeholder={undefined}>
              전투
            </Tab>
            <Tab key="자원" value="자원" placeholder={undefined}>
              자원
            </Tab>
            <Tab key="유형" value="유형" placeholder={undefined}>
              유형
            </Tab>
            <Tab key="소속" value="소속" placeholder={undefined}>
              소속
            </Tab>
            <Tab key="특수" value="특수" placeholder={undefined}>
              특수
            </Tab>
          </TabsHeader>
          <TabsBody placeholder={undefined}>
            <TabPanel key="전투" value="전투">
              전투 키워드들
            </TabPanel>
            <TabPanel key="자원" value="자원">
              자원 키워드들
            </TabPanel>
            <TabPanel key="유형" value="유형">
              유형 키워드들
            </TabPanel>
            <TabPanel key="소속" value="소속">
              소속 키워드들
            </TabPanel>
            <TabPanel key="특수" value="특수">
              특수 키워드들
            </TabPanel>
          </TabsBody>
        </Tabs>
      </DialogBody>
    </Dialog>
  );
};

export default KeywordModal;
