import React from "react";
import { Card, CardBody, CardHeader as CHeader } from "@nextui-org/card";
import { Divider, Link } from "@nextui-org/react";
import { Base } from "next/dist/client/components/react-dev-overlay/internal/styles/Base";

export function SignedAnNDA() {
  return <text>Signed an NDA, cannot tell</text>;
}

export function NoDescriptionYet() {
  return <text>No description... Yet!</text>;
}

function BaseDescription({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col justify-between gap-3">{children}</div>;
}

function BaseGrid({
  cols,
  children,
}: {
  cols?: number;
  children: React.ReactNode;
}) {
  let gridClassName = "grid-cols-2";
  if (cols) {
    gridClassName = `grid-cols-${cols}`;
  }
  return <div className={`${gridClassName} grid gap-3`}>{children}</div>;
}

function CardHeader({ children }: { children: React.ReactNode }) {
  return <CHeader className="justify-center">{children}</CHeader>;
}

export function MyOwnDescription() {
  return (
    <BaseDescription>
      <h1>Building stuff for myself</h1>
      <BaseGrid>
        <Card>
          <CardHeader>
            <h1>This website :)</h1>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              This page is the second version of the page where I collect
              information on what I've done so far
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1>Learning projects</h1>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              Until recently most of the projects that I was a part of required
              learning a lot of new technologies, that I didn't know how to deal
              with
            </p>
            <br />
            <p>
              This lead to creating a lot of micro learning projects that helped
              me to get a grasp of what is going on and how i can use it at my
              work, most of those projects are not published and are unavailable
              for the public
            </p>
            <br />
            <p>
              This way I've being learning Go, NestJS, React, Svelte, Huff,
              Redis, RabbitMQ, Svelte, React, NextJS, Kubernetes, ...
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1>Huff hackathon 2023</h1>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              This one is cool one, because it allowed me to get better with EVM
              assembly and try to make something without any guardrails
            </p>
            <br />
            <p>
              I've being interested in EVM assembly for quite some time, and
              this was a perfect opportunity for a deeper dive
            </p>
            <br />
            <p>
              Fun fact: the hackathon was hosted using Optimism network, which
              did not include all the new opcodes, to be exact it didn't have
              PUSH0 opcode, which adds zero to the stack. How do i know this?
              I've spent 3 hours trying to understand why my code isn't working,
              before finding out that the problem was with this opcode.
              Hackathon was hosted in 24 non-stop format, but after this one I
              was not ready to continue unfortunately.
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1>NeoVim extension for usage counters</h1>
          </CardHeader>
          <CardBody>
            <p>
              When I started using NeoVim (I use Vim btw, just joking, I use
              Jetbrains IDEs and very happy with it), one of the problems was
              that I didn't know amount of references to a class/constant
            </p>
            <br />
            <p>
              After a quick search I found an extension that was able to solve
              the problem, but it didn't work correctly.
            </p>
            <br />
            <p>
              So I've forked it, modified it in a way I wanted and now it's
              useful for me from time to time
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1>Snake in GO</h1>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>What can you build to learn some new language? Snake game</p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1>Event gathering service in GO</h1>
          </CardHeader>
          <Divider />
          <CardHeader>
            <p>
              I decided to start learning Go, the first idea for a backend
              service was to create event gathering service, so here it is
            </p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <h1>Http service monitor with Telegram notifications</h1>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              The idea was to create a generic solution for monitoring http
              endpoints with notifications that will be delivered to me via
              convenient medium for me (in Telegram), so here's a http service
              monitor with Telegram notifications :)
            </p>
          </CardBody>
        </Card>
        <Card className="flow flow-row items-center justify-center">
          <h1>To be continued...</h1>
        </Card>
      </BaseGrid>
    </BaseDescription>
  );
}

export function FuturestateDescription() {
  return (
    <BaseDescription>
      <h1>Building platform for creating network states</h1>
      <Card>
        <CardHeader>
          <h1>Key problems</h1>
        </CardHeader>
        <div className="grid grid-cols-3 gap-3">
          <Card>
            <CardHeader>
              <h1>Extensibility</h1>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                As we don't know where the system will be in one year, two years
                or in five years, it's required to make base architecture as
                flexible and extensible as possible
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h1>Security</h1>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                While thinking about extensibility it's also very important to
                remember that if everything is stolen and broken, perfect and
                extensible architecture doesn't really matter
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h1>Throughput</h1>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                As the target amount of users lies somewhere in thousands, it's
                crucial to make sure that all of the operations are either
                atomic, or they try to be as close to atomic as possible. One
                operation must only interact with user data, shared data and
                temporary data. In other case operation in most cases (where
                we've got more than 10 users) cannot be completed.
              </p>
            </CardBody>
          </Card>
        </div>
      </Card>
      <Divider />
      <h1>Highlights of what I've done at this point</h1>
      <BaseGrid>
        <Card>
          <CardHeader>
            <h1>Designing smart-contracts</h1>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              We need smart-contracts to get something done, so we need to know
              in advance how the system components will interact with each
              other, making sure that the system is extensible and we can
              support it in the future
            </p>
          </CardBody>
        </Card>

        <Card className="justify-center">
          <CardHeader className="justify-center gap-3">
            <h1>System for executing custom user actions</h1>
          </CardHeader>
          <Divider />
          <CardBody>
            <ul className="list-disc pl-4">
              <li>
                We needed a system that will allow users to perform any kind of
                action that is available in the system, while providing
                security, integrity and an option for easy extension
              </li>
              <li>
                To solve this I've developed a modular system that provided
                required extensibility and required security and system
                integrity levels
              </li>
            </ul>
          </CardBody>
        </Card>
        <Card>
          <CardHeader className="justify-center">
            <h1>Deployment system for user's network states</h1>
          </CardHeader>
          <Divider />
          <CardBody>
            <ul className="list-disk pl-4">
              <li>
                Deployment system uses smart-contracts to create a safe
                deployment environment
              </li>
              <li>
                It's possible to create deployment of any size and perform it
                step-by-step achieving desired system state
              </li>
              <li>Deployment uses checksums and IPFS to achieve this</li>
            </ul>
          </CardBody>
        </Card>
        <Card>
          <CardHeader className="justify-center">
            <h1>Extension system</h1>
          </CardHeader>
          <Divider />
          <CardBody>
            <ul className="list-disc pl-4">
              <li>
                We had a problem of making system extensible, easy to operate
                and have an option to add new functions dynamically
              </li>
              <li>
                To achieve this I've developed set of custom smart-contracts so
                now we can hit all of the requirements
              </li>
            </ul>
          </CardBody>
        </Card>
      </BaseGrid>
    </BaseDescription>
  );
}

export function BluelightDescription() {
  return (
    <BaseDescription>
      <h1>Building smart-contracts and backend services for web3 game</h1>
      <Card>
        <CardHeader>
          <h1>Key problems</h1>
        </CardHeader>
        <Divider />
        <BaseGrid cols={2}>
          <Card>
            <CardHeader>
              <h1>Who must pay for transactions?</h1>
            </CardHeader>
            <CardBody>
              <p>
                A lot of work was spent trying to come up with a solution for
                providing system security and making sure that we can handle
                user operations in different ways - if the operations are
                performed only by the users (they spend their money paying for
                the operations) or combined approach, where we can perform some
                operations for users (they pay nothing for the transactions){" "}
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h1>web2 - web3 interactions</h1>
            </CardHeader>
            <CardBody>
              <p>
                Another problem was that this project is 2.5web game - it has
                web2 backend services for the game part and web3 elements, so we
                needed a way to allow backend part to make decisions if the
                action is allowed for user, or not, e.g. is it okay for user to
                withdraw 200 in-game tokens to blockchain or not
              </p>
            </CardBody>
          </Card>
        </BaseGrid>
      </Card>
      <Card>
        <CardHeader>
          <h1>So what's the solution?</h1>
        </CardHeader>
        <CardBody>
          <p>
            One of the solutions that I've come up to was to use EIP-712
            signatures that provide us required security for user operations, so
            most of the time was spent developing smart-contracts and backend
            services that will grant users approval for performing actions
          </p>
        </CardBody>
        <Divider />
      </Card>
      <Divider />
      <h1>Highlights of what I've done</h1>
      <BaseGrid>
        <Card>
          <CardHeader>
            <h1>Designing and developing smart-contract system</h1>
          </CardHeader>
          <CardBody>
            <p>
              As usual - it's required to make sure that smart-contracts can
              interact with each other in extensible manner, securely and other
              parts of the system - backend and frontend can get all the
              required information and perform all the actions required
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1>Anti-bot system</h1>
          </CardHeader>
          <CardBody>
            <ul className="list-disc pl-4">
              <li>
                After initial launch we have encountered bot attacks that
                threatened to drain our system
              </li>
              <li>
                By analyzing transactions and way that these bot farms were
                organized, I've proposed a solution (that cannot be named) and
                implemented it
              </li>
              <li>
                It was possible to detect most of the bot addresses based on the
                on-chain activity analysis of the player addresses (around third
                of the players were bots), and after implementing and
                integrating this service the bot attacks stopped
              </li>
            </ul>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1>TheGraph subgraph for the smart-contracts</h1>
          </CardHeader>
          <CardBody>
            <ul className="list-disc pl-4">
              <li>
                Developed subgraph that stores all the required information
                about the smart-contracts
              </li>
              <li>
                Information was used by backend services and frontend
                application, that were developed by me and other team members.
                As a result it was possible to lower reads from blockchain and
                perform almost all data fetching using provided graphQL
                interface
              </li>
            </ul>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1>OpenTelemetry and Sentry integration</h1>
          </CardHeader>
          <CardBody>
            <p>
              While developing backend services I've encountered problem - we
              don't know pod load, when it crashed and what endpoints got hit
              the most
            </p>
            <ul className="list-disc pl-4">
              <li>
                I've integrated OpenTelemetry to the blockchain-related backend
                services and set up metrics in Prometheus
              </li>
              <li>
                I've integrated Sentry to the blockchain-related backend
                services, so we had all the information about crashes (there
                were almost none :) )
              </li>
            </ul>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1>Application management and server/cloud setup</h1>
          </CardHeader>
          <CardBody>
            <ul className="list-disc pl-4">
              <li>
                Containerization of applications, creating K8s and Kustomize
                files for deployments
              </li>
              <li>
                Setting up base Ubuntu servers for selfhosted TheGraph node and
                some internal tools
              </li>
              <li>
                Setting up and managing Kubernetes clusters for dev/staging/prod
                in Azure cloud
              </li>
            </ul>
          </CardBody>
        </Card>
      </BaseGrid>
    </BaseDescription>
  );
}

export function HodlTreeDescription() {
  return (
    <BaseDescription>
      <h1>Supporting existing projects</h1>
      <p>
        Not really a lot to tell, this was the place where I was introduced to
        stand ups, sprint planning and discovered a lot of web3 projects
      </p>
      <BaseGrid>
        <Card>
          <CardHeader>
            <h1>Onchain arbitrage</h1>
          </CardHeader>
          <CardBody>
            <ul className="list-disc pl-4">
              <li>
                Discovered what <b>delegatecall</b> can be used for
              </li>
              <li>
                Added new DeXes to the platform - a lot of UniswapV2-like,
                Balancer, mStable, 0x and some others
              </li>
              <li>
                Added notes on the inner working of the exchanges to help with
                their integration to the backend system
              </li>
            </ul>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1>Stablecoins flashloan solution</h1>
          </CardHeader>
          <CardBody>
            <ul className="list-disc pl-4">
              <li>Added new tokens to the flashloan system</li>
              <li>Extended test cases</li>
            </ul>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1>Hedging solution</h1>
          </CardHeader>
          <CardBody>
            <ul className="list-disc pl-4">
              <li>Bugfixes, testing</li>
            </ul>
          </CardBody>
        </Card>
      </BaseGrid>
    </BaseDescription>
  );
}

export function TokenstationDescription() {
  return (
    <BaseDescription>
      <h1>Building stuff with friends :)</h1>
      <Card>
        <CardHeader>
          <h1>Key problems</h1>
        </CardHeader>
        <CardBody>
          <h1>No money</h1>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <h1>Solution</h1>
        </CardHeader>
        <CardBody>
          <h1>Make something that will bring us money</h1>
        </CardBody>
      </Card>
      <Divider />

      <h1>What have we done?</h1>
      <BaseGrid>
        <Card>
          <CardHeader>
            <h1>TRON hackathon 2022</h1>
          </CardHeader>
          <CardBody>
            <p>
              While working at HodlTree I had to work a little bit with Balancer
              protocol and was interested in how it works and the idea of making
              different liquidity pools to work together was very fascinating,
              so i started deconstructing the protocol and thinking how can i
              implement it in a different way.
            </p>
            <br />
            <p>
              With this idea to create a solution that will unite different
              liquidity pools in one system we entered the TRON hackathon 2022
              and took 4th place in DeFi category.
            </p>
            <br />
            <p>
              I was a single solidity dev responsible for all the
              smart-contracts and helped a little with our backend services for
              gathering events (TheGraph-like solution for TRON is still
              non-existent)
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1>NFTs</h1>
          </CardHeader>
          <CardBody>
            <p>Everyone did it, but not everyone wants to tell you about it</p>
            <br />
            <p>
              The most interesting part was optimizing open-source Python image
              generator by adding multiprocessing (not multithreading) to it,
              thus making it run 6-7 times faster than original single-threaded
              version
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1>AML service integration</h1>
          </CardHeader>
          <CardBody>
            <p>
              Not a lot of interesting stuff, just making a service that glues
              together AML service and custom smart-contracts
            </p>
          </CardBody>
        </Card>
      </BaseGrid>
    </BaseDescription>
  );
}

export function VniinsDescription() {
  return (
    <BaseDescription>
      <h1>Doing stuff</h1>
      <h2>Here's the stuff I can disclose:</h2>
      <BaseGrid>
        <Card>
          <CardHeader>
            <h1>Changed background image for GRUB :D</h1>
          </CardHeader>
          <CardBody>
            <p>
              It was a bit painful, but fun and here I found out that Polish
              notation exists and GIMP is not a meme, but a useful piece of
              software
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1>Supported bash-scripts for building OS</h1>
          </CardHeader>
          <CardBody>
            <p>A lot of Bash and pain</p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1>Fuzzing of custom Linux core</h1>
          </CardHeader>
          <CardBody>
            <p>syzkaller one love, making custom core work with it is pain</p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1>Load testing of data center</h1>
          </CardHeader>
          <CardBody>
            <p>Ansible + Bash magic + Zabbix + help us gods</p>
          </CardBody>
        </Card>
      </BaseGrid>
    </BaseDescription>
  );
}

export function SvoiDescription() {
  return (
    <BaseDescription>
      <h1>Developing stuff that the boss wanted us to</h1>
      <Card>
        <CardHeader>
          <h1>Key problems</h1>
        </CardHeader>
        <BaseGrid cols={3}>
          <Card>
            <CardHeader>
              <h1>Asynchronous blockchain</h1>
            </CardHeader>
            <CardBody>
              <p>
                In this company we worked with an asynchronous blockchain,
                called Everscale
              </p>
              <p>
                Asynchronous in this case means that there is no single point of
                fail, anything may fail and you wouldn't even know about it, as
                calls to smart-contracts are spread across different blocks.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h1>No developer tools</h1>
            </CardHeader>
            <CardBody>
              <p>
                Almost no tools were available for developers, we had only
                compiler for the smart-contracts and NodeJS bindings for basic
                operations, so everything from smart-contracts deploy system to
                debuggers had to be written from scratch
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h1>No documentation</h1>
            </CardHeader>
            <CardBody>
              <p>
                We had only official documentation, which was not very clear for
                some topics and a chat in Telegram that hosted (I think) all of
                the developers for Everscale (or at least most of them)
              </p>
            </CardBody>
          </Card>
        </BaseGrid>
      </Card>

      <Card>
        <CardHeader>
          <h1>Solution</h1>
        </CardHeader>
        <CardBody>
          <p>
            Create our own developer tools from scratch, report bugs back to the
            developers of Everscale and be active in Telegram chat :)
          </p>
        </CardBody>
      </Card>

      <Divider />

      <h1>
        So what was possible to do in this conditions? (spoiler: everything)
      </h1>
      <BaseGrid>
        <Card>
          <CardHeader>
            <h1>Developer tools</h1>
          </CardHeader>
          <CardBody>
            <p>
              It was a bit tough, but I've managed to create some tools that
              helped us on the way to building stuff
            </p>
            <ul className="list-disc pl-4">
              <li>
                Small framework for testing that simplified testing of
                smart-contracts
              </li>
              <li>Deploy tool for the smart-contracts</li>
              <li>
                Debug tool that helped to debug asynchronous smart-contracts
                interaction and performed decoding of transactions so it would
                be easier to understand where something failed
              </li>
            </ul>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1>Jury duty</h1>
          </CardHeader>
          <CardBody>
            <p>
              Yup, I was a part of jury for the hackathons for Everscale as one
              of developers that had at least some idea of what is going on.
              I've managed to find{" "}
              <Link
                href="https://github.com/Pafaul/JuryContest/blob/master/Jury%20proposal.pdf"
                target="_blank"
              >
                the proposal that was required for becoming a jury
              </Link>{" "}
              :)
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1>DeFi hackathon, part 1</h1>
          </CardHeader>
          <CardBody>
            <p>
              This project was developed for the hackathon that was hosted by
              the community of the chain, it consisted of three stages - initial
              development, improvement and user incentives
            </p>
            <br />
            <p>
              At this stage we just tried to copy the UniswapV2 architecture to
              the asynchronous blockchain and learnt how it works and what
              quirks Everscale blockchain had, it was very painful to be honest
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h1>DeFi hackathon, part 2</h1>
          </CardHeader>
          <CardBody>
            <p>
              After the initial stage, the smart-contracts looked like a mess,
              so I've decided to step back and rewrite the original
              smart-contracts so that they would fit the developing patterns
              that started to pop up
            </p>
            <br />
            <p>
              Full rewrite of the smart-contracts, so they would work and could
              interact with new token standard (TIP-3)
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h1>DeFi hackathon, part 3</h1>
          </CardHeader>
          <CardBody>
            <p>
              At this stage base smart-contracts were finished and the only
              thing that we needed to do was create some user incentives like
              staking
            </p>
            <br />
            <p>So, I've developed</p>
            <ul className="list-disc pl-4">
              <li>Staking smart-contracts for user incentives</li>
              <li>
                Backend service for gathering events from our smart-contracts
              </li>
            </ul>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h1>Lending protocol</h1>
          </CardHeader>
          <CardBody>
            <p>
              Long story short: we received a task for creating lending solution
            </p>
            <br />
            <p>What was done in order to try and make it work:</p>
            <ul className="list-disc pl-4">
              <li>
                I've researched well-known lending protocols, e.g. Compound,
                AAVE, Maker and JUST to find out how they work and got sad
                because they all work in synchronous world, which makes
                everything 2 times easier
              </li>
              <li>
                Created math model that will serve as a base for our lending
                protocol
              </li>
              <li>
                Created set of smart-contracts that implemented math model, base
                operations and accounts for users that held information about
                the user
              </li>
              <li>
                Tried to test it all, but failed in the end, as the system was
                too large for a single smart-contract developer (me) to handle,
                as asynchronous model turned the system in callback hell with a
                lot of security problems
              </li>
            </ul>
          </CardBody>
        </Card>
      </BaseGrid>
    </BaseDescription>
  );
}

export function IzzzioDescription() {
  return (
    <BaseDescription>
      <h1>Building our own custom blockchain</h1>
      <Card>
        <CardHeader>
          <h1>Key problems</h1>
        </CardHeader>
        <BaseGrid cols={3}>
          <Card>
            <CardHeader>
              <h1>NodeJS</h1>
            </CardHeader>
            <CardBody>
              <p>
                I don't know anything about NodeJS and asynchronous operations
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h1>Blockchain</h1>
            </CardHeader>
            <CardBody>
              I had no idea what blockchain is and how it works
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h1>A lot of people</h1>
            </CardHeader>
            <CardBody>
              <p>
                This was the first time working at a place where I had to
                interact with a lot of people working with the same code base
              </p>
            </CardBody>
          </Card>
        </BaseGrid>
      </Card>
      <Card>
        <CardHeader>
          <h1>THE solution</h1>
        </CardHeader>
        <CardBody>
          <p>
            Just sit down and learn everything required, while trying to be
            useful for the team and making contributions that I can handle or
            that relate to my previous experience
          </p>
        </CardBody>
      </Card>
      <Divider />
      <h1>
        What have I managed to do before Corona hit everyone and sadly we got
        closed too :C ?
      </h1>
      <BaseGrid>
        <Card>
          <CardHeader>
            <h1>Learn stuff</h1>
          </CardHeader>
          <CardBody>
            <ul className="list-disc pl-4">
              <li>Learn how GitHub works and how to automate</li>
              <li>Learn basics of NodeJS</li>
              <li>Learn basics of Blockchain</li>
              <li>Learn basics of working with people on a single codebase</li>
            </ul>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1>Caching for blocks</h1>
          </CardHeader>
          <CardBody>
            <p>
              The blocks that were requested recently are the ones that will be
              requested more frequently than others, as most of the time it's
              either a fresh block and we need to distribute it/perform some
              reads or requesting some historical information for a specific
              block
            </p>
            <p>
              Loading data from storage is slower than loading it from memory,
              so a timeout-based cache was added
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1>Automation for building executables</h1>
          </CardHeader>
          <CardBody>
            <p>
              We needed a pipeline that will automate building Windows and Linux
              executables for every release, so that we wouldn't need to do it
              manually
            </p>
          </CardBody>
        </Card>
      </BaseGrid>
    </BaseDescription>
  );
}
