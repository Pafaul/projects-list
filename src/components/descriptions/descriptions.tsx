export function SignedAnNDA() {
  return <text>Signed an NDA, cannot tell</text>;
}

export function NoDescriptionYet() {
  return <text>No description... Yet!</text>;
}

export function BluelightDescription() {
  return (
    <div>
      <text>Wtf have i done:</text>
      <ul className="list-disc pl-4">
        <li>Designing smart-contract system for the game</li>
        <li>Developed smart-contracts for the game</li>
        <li>Developed TheGraph subgraph for the smart-contracts</li>
        <li>Developed smart-contracts for the ERC20 token bridge</li>
        <li>
          Developed backend service for transferring tokens through the bridge
        </li>
        <li>
          Developed backend services for approving on-chain users operation
          requests:
          <ol className="list-disc pl-4">
            <li>Withdrawing tokens using ERC721 signatures</li>
            <li>Minting tokens using ERC721 signatures</li>
            <li>
              Withdrawing ERC20 tokens earned in-game using ERC721 signatures
            </li>
            <li>Making purchases with ERC20 tokens</li>
          </ol>
        </li>
      </ul>
    </div>
  );
}

export function HodlTreeDescription() {
  return (
    <div>
      <text>What were we hodling?</text>
      <ul className="list-disc pl-4">
        <li>
          <text>Supporting arbitrage solution</text>
          <ul className="list-disc pl-4">
            <li>
              Adding new exchanges to the platform (UniswapV2-like, Balancer, 0x
              and some others)
            </li>
            <li>
              Making notes on the inner workings of the exchanges for their
              integration to the backend
            </li>
          </ul>
        </li>
        <li>
          <text>Supporting flashloan solution</text>
          <ul className="list-disc pl-4">
            <li>Adding new tokens</li>
            <li>Extending test cases</li>
          </ul>
        </li>
        <li>
          <text>Supporting hedging solution</text>
        </li>
      </ul>
    </div>
  );
}

export function IzzzioDescription() {
  return (
    <div>
      <text>
        We were developing custom blockchain solution for general-purpose usage,
        but Corona hit us hard :c
      </text>
      <br />
      <text>Was it izzzy? You decide</text>
      <ul className="list-disc pl-4">
        <li>Added caching for blocks</li>
        <li>
          Added Github pipelines for building Linux and Windows distributions
        </li>
      </ul>
    </div>
  );
}

export function TokenstationDescription() {
  return (
    <div>
      <text>
        We are just a friend group that decided to cook some projects together
        :)
      </text>
      <br />
      <text>So what I've cooked while being there?</text>
      <ul className="list-disc pl-4">
        <li>
          <text>Some NFT projects</text>
          <ul className="list-disc pl-4">
            <li>All of the smart-contracts</li>
            <li>
              Optimized open-source generator to get any amount of images from
              pre-set parts to increase performance (added multithreading to it)
            </li>
            <li>Backend part for storing images and retrieving them</li>
          </ul>
        </li>
        <li>
          <text>Tron hackathon 2022, DeFi category 4th place</text>
          <ul>
            <li>
              Designed smart-contract exchange system that would be able to
              integrate any other DeFi by leveraging extensions system
            </li>
            <li>Implemented the thing i've designed</li>
            <li>
              Helped to implement event-gathering solution for Tron network
              (TheGraph is non-existent for TRON)
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export function VniinsDescription() {
  return (
    <div>
      <text>Cannot disclose details, signed an NDA</text>
    </div>
  );
}

export function SvoiDescription() {
  return (
    <div>
      <text>That's where my blockchain development started...</text>
      <br />
      <text>So what happened here?</text>
      <ul className="list-disc pl-4">
        <li>Development of Uniswap-V2 like DeFi for Everscale blockchain</li>
      </ul>
    </div>
  );
}

export function MyOwnDescription() {
  return <div></div>;
}
