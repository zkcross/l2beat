import { UnixTime } from '@l2beat/types'

import { BridgeDescription } from './types'

export const orbiterBridge: BridgeDescription = {
  name: 'Orbiter Bridge',
  slug: 'orbiterbridge',
  validation: 'Liquidity Network',
  links: {
    websites: ['https://orbiter.finance/'],
  },
  // In Orbiter the escrows are EOAs
  escrows: [
    {
      address: '0x80C67432656d59144cEFf962E8fAF8926599bCF8',
      sinceTimestamp: new UnixTime(1649170157),
      tokens: ['ETH'],
    },
    {
      address: '0x41d3D33156aE7c62c094AAe2995003aE63f587B3',
      sinceTimestamp: new UnixTime(1635067681),
      tokens: ['USDC'],
    },
  ],

  connections: [],
}
