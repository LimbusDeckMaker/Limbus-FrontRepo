import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

const PrivacyPolicy = () => {
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
        Policy
      </Typography>
      <Dialog
        open={open}
        handler={handleOpen}
        placeholder=""
        className="bg-primary-450"
      >
        <DialogHeader placeholder="" className="text-primary-100">
          Privacy Policy for Baslimbus.info
        </DialogHeader>
        <DialogBody placeholder="" className="bg-primary-450">
          <div className="text-primary-100">
            <p>
              <p className="text-lg">Usage of Analytics Data</p>
            </p>
            <br />
            <p>
              Baslimbus.info uses Google Analytics to collect anonymized
              information about users, including their usage habits on this
              site. This data is used solely for the purpose of improving
              Baslimbus.info and will never be used for advertising purposes.
              Aggregated usage data may occasionally be shared with third
              parties if the need arises; however, no personal data is ever
              collected or shared.
            </p>
            <br />
            <p>
              By using Baslimbus.info, you agree to the above use of Google
              Analytics, and give consent for the cookies required by Google for
              this service to operate. Please refer to{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Google Analytics's Privacy Policy
              </a>{" "}
              for more information.
            </p>
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

export default PrivacyPolicy;
