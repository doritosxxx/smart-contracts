import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();
const { ALCHEMY_API_KEY, GOERLI_PRIVATE_KEY } = process.env;

if (!ALCHEMY_API_KEY) {
  throw new Error("ALCHEMY_API_KEY is not set");
}
if (!GOERLI_PRIVATE_KEY) {
  throw new Error("GOERLI_PRIVATE_KEY is not set");
}

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};

export default config;
