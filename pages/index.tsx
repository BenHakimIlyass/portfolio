import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import * as Icon from '../kit/icon'
import Typo from '../kit/typo'
import Stack from '../kit/stack'
import Career from '../components/career'
import Education from '../components/education'
import Image, { ImageProps } from 'next/image'
import Seo from '../components/seo'

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full max-w-md flex-1 flex-col m-auto relative">
    {children}
  </div>
)

const HeroImage: React.FC<ImageProps> = ({ className = '', alt, ...rest }) => (
  <div className={`w-250 h-100 relative ${className}`}>
    <Image
      objectFit="cover"
      layout="fill"
      className="rounded-xl"
      priority
      alt={alt}
      {...rest}
    />
  </div>
)

const Home: NextPage = () => {
  return (
    <div className="flex w-full flex-1 flex-col py-140 xs:px-18 md:px-40 h-fit">
      <Seo />
      <Head>
        <title>Ilyass Ben Hakim - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        {/* useless images */}
        <Stack className="gap-40 absolute right-0 top-0 xs:hidden lg:flex">
          <HeroImage
            src="/images/birds.png"
            alt="Useless birds"
            className="ml-80"
          />
          <HeroImage src="/images/paint.png" alt="Useless paint drop" />
          <Typo variant="smallFreightText" className="text-right text-grey-400">
            These images {"don't"} serve any purpose
            <div>They just look good</div>
          </Typo>
        </Stack>

        {/* layout */}
        <Stack className="gap-100">
          <header>
            {/* hero */}
            <Stack className="gap-12">
              <Typo variant="h1" className="text-grey-500">
                Hey there, welcome to my portfolio
              </Typo>
              <Typo variant="h2" className="text-indigo-500">
                My name is Ilyass Ben Hakim - I’m a Software engineer
              </Typo>
            </Stack>
          </header>

          <main>
            {/* body */}
            <Stack className="gap-80">
              {/* career */}
              <Stack className="gap-60">
                <Typo variant="h3" className="text-grey-400">
                  Career
                </Typo>

                {/* 2022 - 2023 */}
                <Stack className="gap-40">
                  <Typo variant="h4" className="text-grey-300">
                    2022 - 2023
                  </Typo>
                  <Career
                    position="Frontend engineer"
                    mode="full-time"
                    period="Sep 2022 - Present"
                    company="Gonuggets"
                    location="Luxembourg"
                    description="An internal AI powered platform that manages and delivers growth to brands selling on e-commerce marketplaces and D2C channels across EMEA."
                  />
                </Stack>

                {/* 2021 - 2022 */}
                <Stack className="gap-40">
                  <Typo variant="h4" className="text-grey-300">
                    2021 - 2022
                  </Typo>
                  <Career
                    position="Frontend engineer"
                    mode="full-time"
                    period="Oct 2021 - Sep 2022"
                    company="Monk"
                    location="France (remote)"
                    description="AI Powered car damage inspection, based on a cross-platform SDK and a set of frontend packages, combined in a  React Native application."
                  />
                  <Career
                    position="Frontend developer"
                    mode="part-time"
                    period="Jan 2021 - Apr 2021"
                    company="Nvision"
                    location="Luxembourg"
                    description="A real estate platform that manages listings, sales and marketing."
                  />
                </Stack>

                {/* 2020 - 2021 */}
                <Stack className="gap-40">
                  <Typo variant="h4" className="text-grey-300">
                    2020 - 2021
                  </Typo>
                  <Career
                    position="Frontend engineer"
                    mode="part-time"
                    period="Dec 2020 - Apr 2022"
                    company="Shighel"
                    location="Kuwait (remote)"
                    description="A fiverr like, freelancing/recruitment platform based on the GCC."
                  />
                  <Career
                    position="Co-founder"
                    mode="side project"
                    period="Jan 2020 - Present"
                    company="Gfree"
                    location="Earth"
                    description="A community platform for everything Gluten-free related, where users can engage in creating and sharing their ideas, including recipes and personal stories."
                  />
                </Stack>

                {/* 2019 - 2020 */}
                <Stack className="gap-40">
                  <Typo variant="h4" className="text-grey-300">
                    2019 - 2020
                  </Typo>
                  <Career
                    position="Frontend developer"
                    mode="internship"
                    period="Jun 2019 - Nov 2019"
                    company="Next-challenge"
                    location="France (remote)"
                    description="An AI powered hiring platform, taking care of the match-making process between a resume and a job offer."
                  />
                </Stack>
              </Stack>

              {/* education */}
              <Stack className="gap-60">
                <Typo variant="h3" className="text-grey-400">
                  Education
                </Typo>

                {/* 2019 - 2021 */}
                <Stack className="gap-40">
                  <Typo variant="h4" className="text-grey-300">
                    2019 - 2021
                  </Typo>
                  <Education
                    location="Morocco, Casablanca"
                    degree="Master's"
                    univesity="YNOV"
                    field="Software engineering"
                  />
                </Stack>

                {/* 2018 - 2019 */}
                <Stack className="gap-40">
                  <Typo variant="h4" className="text-grey-300">
                    2018 - 2019
                  </Typo>
                  <Education
                    location="Morocco, Tangier"
                    degree="Professional"
                    univesity="BMHS SUPTEM"
                    field="Computer science"
                  />
                </Stack>
              </Stack>
            </Stack>
          </main>

          <footer>
            <Stack className="gap-30">
              <Typo variant="p" className="text-center">
                Ilyass Ben Hakim - ilyassbenhakim2@gmail.com
              </Typo>
              <Stack className="gap-30 justify-center" row>
                <a
                  href="https://github.com/BenHakimIlyass"
                  target="_blanc"
                  rel="noopener noreferrer"
                >
                  <Icon.Github />
                  <span className="h-1 w-1 absolute overflow-hidden	top-[-10px]">
                    Github
                  </span>
                </a>
                <a
                  href="mailto:ilyassbenhakim2@gmail.com"
                  target="_blanc"
                  rel="noopener noreferrer"
                >
                  <Icon.Mail />

                  <span className="h-1 w-1 absolute overflow-hidden	top-[-10px]">
                    Email
                  </span>
                </a>
              </Stack>
            </Stack>
          </footer>
        </Stack>
      </Container>
    </div>
  )
}

export default Home
