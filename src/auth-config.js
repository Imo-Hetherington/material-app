import { StorageHelper } from "@aws-amplify/core";
const storage = new StorageHelper().getStorage();
const authConfig = {
  Auth: {
    region: "eu-west-2",
    userPoolId: "eu-west-2_RV4PwuFtY",
    userPoolWebClientId: "5o2jqmbcsbe6rf8kb5f2cf1poj",
    storage
  },
  Analytics: {
    disabled: true
  }
};

export default authConfig;
