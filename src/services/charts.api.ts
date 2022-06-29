import ApiClient from './api';

export type TVLParams = {
  pg: number;
  tvl_min: number;
  sort: string;
  sort_order: string;
  farms_tvl_staked_gte: number;
};

export type ChartData = {
  date: string;
  value: number;
};

export type SelectedFarm = {
  active: boolean;
  blockchain: string;
  dateAdded: Date;
  dateUpdated: Date;
  farmId: string;
  farmName: string;
  farmType: string;
  lastFullUpdate: Date;
  riskLevel: string;
  scam: Boolean;
  scamInfo: string;
  tvlChange24h: string;
  tvlChange24hValue: number;
  tvlStaked: number;
  tvlStakedHistory: ChartData[];
};

export type TVLData = {
  active: boolean;
  antiWhale: null;
  aprDaily: number;
  aprWeekly: number;
  aprYearly: number;
  apyYearly: number;
  asset: string;
  assetAddress: string | null;
  assetId: string;
  assetLockup: boolean;
  assetPopupMessage: string | null;
  assetPrice: number;
  auditInfo: string;
  blockchain: string;
  category: string | null;
  collateralLockPeriod: null;
  d_active_reason: null;
  dateAdded: Date;
  dateEnding: Date | null;
  dateStarted: Date | null;
  dateUpdated: Date;
  daysRemaining: null;
  depositFee: null;
  exchangeName: null;
  exchangePicture: null;
  exchangeUrl: null;
  exchangeVersion: null;
  farm: string;
  farmId: string;
  farmImage: string | null;
  farmName: string;
  farmType: null;
  feeAprYearly: number;
  harvestLockup: null;
  harvestLockupInfo: null;
  impermanentLoss: null;
  impermanentLoss30d: null;
  info: null;
  investmentLink: null;
  manuallyCalculatedAPR: boolean;
  maxPoolCap: null;
  multiplier: null;
  nativeToken: null;
  nativeTokenAddress: null;
  nativeTokenInvestLink: null;
  nativeTokenMarketCap: number;
  nativeTokenPrice: number;
  new_asset: boolean;
  otherFees: null;
  otherPoolEconomicsInfo: null;
  pid: number;
  poolAlreadyFilled: boolean;
  priceCorrelation_30d: null;
  rewardTokenA: null;
  rewardTokenAAddress: null;
  rewardTokenAAprYearly: number;
  rewardTokenAAprYearlyMaxBoosted: number;
  rewardTokenAPrice: number;
  rewardTokenAWeeklyAmount: number;
  rewardTokenAWeeklyDollarAmount: number;
  rewardTokenB: null;
  rewardTokenBAddress: null;
  rewardTokenBAprYearly: number;
  rewardTokenBAprYearlyMaxBoosted: number;
  rewardTokenBPrice: number;
  rewardTokenBWeeklyAmount: number;
  rewardTokenBWeeklyDollarAmount: number;
  scam: boolean;
  scamInfo: null;
  selected_farm: SelectedFarm[];
  stakingAddress: null;
  stakingLink: string;
  status: string;
  tokenA: null;
  tokenAAddress: null;
  tokenABacking: number;
  tokenAHolders: number;
  tokenAHoldersHistory: ChartData[];
  tokenAPicture: null;
  tokenAPrice: number;
  tokenAPriceHistory: ChartData[];
  tokenB: null;
  tokenBAddress: null;
  tokenBBacking: number;
  tokenBHolders: number;
  tokenBPicture: null;
  tokenBPrice: number;
  tokenC: null;
  tokenCAddress: null;
  tokenCBacking: number;
  tokenCHolders: number;
  tokenCPicture: null;
  tokenCPrice: number;
  tokenD: null;
  tokenDAddress: null;
  tokenDBacking: number;
  tokenDHolders: number;
  tokenDPicture: null;
  tokenDPrice: number;
  tokenE: null;
  tokenEAddress: null;
  tokenEBacking: number;
  tokenEHolders: number;
  tokenEPicture: null;
  tokenEPrice: number;
  transferTax: null;
  transferTaxInfo: null;
  tvlChange24h: string;
  tvlChange24hValue: number;
  tvlExchange: number;
  tvlFarm: number;
  tvlStaked: number;
  underlyingFarm: null;
  url: null;
  vaultAddress: null;
  volume_24h: null;
  weight: null;
  withdrawalFee: null;
  yearlyTokenRewardPool: number;
  yieldType: string;
};

export type TVLResponse = {
  data: TVLData[];
  max_pages: number;
};

class ChartsApi extends ApiClient {
  constructor() {
    super({ baseURL: process.env.REACT_APP_API_URL });
  }

  async getTVLData(params?: TVLParams): Promise<TVLResponse> {
    const res = await this.get<TVLResponse>('/get_assets', {
      params,
    });

    return res.data;
  }
}

export default new ChartsApi();
