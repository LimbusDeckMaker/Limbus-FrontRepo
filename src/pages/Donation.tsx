import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

const Donation = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-light text-xs md:text-sm text-primary-100 cursor-pointer"
        onClick={handleOpen}
        placeholder=""
      >
        후원하기
      </Typography>
      <Dialog
        open={open}
        handler={handleOpen}
        placeholder=""
        className="bg-primary-450"
      >
        <DialogHeader placeholder="" className="text-primary-100">
          후원하기
        </DialogHeader>
        <DialogBody placeholder="" className="bg-primary-450">
          <div className="text-primary-100 text-base p-5">
            <a
              href="https://toss.me/단테의빵과수프"
              target="_blank"
              rel="noopener noreferrer"
            >
              후원링크 (토스)
            </a>
            <br />
            <br />
            <a
              href="https://www.patreon.com/BreadAndSoup"
              target="_blank"
              rel="noopener noreferrer"
            >
              후원링크 (패트리온)
            </a>
          </div>
        </DialogBody>
        <DialogFooter placeholder="">
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1 text-white"
            placeholder=""
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default Donation;
