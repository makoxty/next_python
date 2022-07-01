import React from "react";
import "twin.macro";

interface Props {
  children?: React.ReactNode;
}
const Page = ({ children }: React.PropsWithChildren<Props>) => {
  return (
    <div tw="justify-center flex bg-bg_blue">
      <div tw="w-9/12 justify-center flex bg-white pb-5 pt-5">{children}</div>
    </div>
  );
};

export default Page;
