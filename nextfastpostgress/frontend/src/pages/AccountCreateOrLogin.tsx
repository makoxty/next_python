import React from "react";
import LabelInput from "./components/LabelInput";
import "twin.macro";
import Page from "./components/Page";

const AccountCreateOrLogin = () => {
  return (
    <Page>
      <div>
        <LabelInput labelText="メールアドレス" inputType="text" required />
        <LabelInput labelText="パスワード" inputType="password" mt required />
      </div>
    </Page>
  );
};

export default AccountCreateOrLogin;
