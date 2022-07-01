import React from "react";
import tw from "twin.macro";
import { Input } from "@chakra-ui/react";

interface Props {
  labelText: string;
  inputType: string;
  inputPlaceholder?: string;
  required?: boolean;
  mt?: boolean;
}

const LabelInput = ({
  labelText,
  inputType,
  inputPlaceholder,
  required,
  mt,
}: Props) => {
  return (
    <div css={mt ? tw`mt-5` : tw`mt-0`}>
      <div tw="text-left">
        <label>{labelText}</label>
        {required && <span tw="text-red">*</span>}
      </div>
      <div>
        <Input
          w={"150%"}
          h={25}
          placeholder={inputPlaceholder}
          type={inputType}
          border={"1px solid #CCCCFF"}
          borderRadius="5px"
        />
      </div>
    </div>
  );
};

export default LabelInput;
