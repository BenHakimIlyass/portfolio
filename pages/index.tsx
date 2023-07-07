import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import Image, { ImageProps } from 'next/image'
import Career, { Technology } from '../components/career'
import Education from '../components/education'
import Seo from '../components/seo'
import * as Icon from '../kit/icon'
import Stack from '../kit/stack'
import Typo from '../kit/typo'

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

                <Career
                  position="Frontend engineer"
                  mode="full-time"
                  period="Sep 2022 - Present"
                  company="Gonuggets"
                  location="Luxembourg"
                  description="An internal AI powered platform that manages and delivers growth to brands selling on e-commerce marketplaces and D2C channels across EMEA."
                  technologies={[
                    'REACT',
                    'NEXTJS',
                    'SWR',
                    'TYPESCRIPT',
                    'JAVASCRIPT',
                    'EMOTION',
                    'GLIDE',
                    'JEST',
                    'REACT TESTING LIBRARY',
                    'ESLINT',
                  ]}
                />

                <Career
                  position="Frontend engineer"
                  mode="full-time"
                  period="Oct 2021 - Sep 2022"
                  company="Monk"
                  location="France (remote)"
                  description="AI Powered car damage inspection, based on a cross-platform SDK and a set of frontend packages, combined in a  React Native application."
                  technologies={[
                    'REACT',
                    'REACT NATIVE',
                    'EXPO',
                    'REDUX',
                    'FORMIK',
                    'TYPESCRIPT',
                    'JAVASCRIPT',
                    'REACT NATIVE ANIMATED',
                    'AUTH0',
                    'GIT',
                    'SENTRY',
                    'ESLINT',
                  ]}
                />
                <Career
                  position="Frontend developer"
                  mode="part-time"
                  period="Jan 2021 - Apr 2021"
                  company="Nvision"
                  location="Luxembourg"
                  description="A real estate platform that manages listings, sales and marketing."
                  technologies={[
                    'REACT',
                    'REDUX',
                    'FORMIK',
                    'MUI',
                    'AXIOS',
                    'JAVASCRIPT',
                    'PURE CSS',
                    'GIT',
                  ]}
                />

                <Career
                  position="Frontend engineer"
                  mode="part-time"
                  period="Dec 2020 - Apr 2022"
                  company="Shighel"
                  location="Kuwait (remote)"
                  description="A fiverr like, freelancing/recruitment platform based on the GCC."
                  technologies={[
                    'REACT',
                    'NEXTJS',
                    'APOLLO GRAPHQL',
                    'FORMIK',
                    'JAVASCRIPT',
                    'TYPESCRIPT',
                    'STYLED-COMPONENTS',
                    'JEST',
                    'REACT TESTING LIBRARY',
                    'GIT',
                    'ESLINT',
                  ]}
                />
                <Career
                  position="Co-founder"
                  mode="side project"
                  period="Jan 2020 - Present"
                  company="Gfree"
                  location="Earth"
                  description="A community platform for everything Gluten-free related, where users can engage in creating and sharing their ideas, including recipes and personal stories."
                  technologies={[
                    'REACT',
                    'NEXTJS',
                    'REDUX',
                    'REDUX THUNK',
                    'FORMIK',
                    'JAVASCRIPT',
                    'TYPESCRIPT',
                    'STYLED-COMPONENTS',
                    'AXIOS',
                    'NODEJS',
                    'EXPRESSJS',
                    'JEST',
                    'REACT TESTING LIBRARY',
                    'HUSKY',
                    'GIT',
                    'ESLINT',
                  ]}
                />

                <Career
                  position="Frontend developer"
                  mode="internship"
                  period="Jun 2019 - Nov 2019"
                  company="Next-challenge"
                  location="France (remote)"
                  description="An AI powered hiring platform, taking care of the match-making process between a resume and a job offer."
                  technologies={[
                    'REACT',
                    'REDUX',
                    'REDUX SAGA',
                    'JAVASCRIPT',
                    'STYLED-COMPONENTS',
                    'AXIOS',
                    'GIT',
                  ]}
                />
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

              <Stack className="gap-60">
                <Stack className="gap-40">
                  <Typo variant="h4" className="text-grey-300">
                    Programming languages and frameworks
                  </Typo>
                  <Stack className="gap-12" wrap row>
                    {[
                      'TYPESCRIPT',
                      'JAVASCRIPT',
                      'REACTJS',
                      'NEXTJS',
                      'REACT NATIVE',
                      'EXPO',
                    ].map((technology) => (
                      <Technology label={technology} key={technology} />
                    ))}
                  </Stack>
                </Stack>
                <Stack className="gap-40">
                  <Typo variant="h4" className="text-grey-300">
                    Data fetching and state management
                  </Typo>
                  <Stack className="gap-12" wrap row>
                    {[
                      'REDUX',
                      'REDUX SAGA/THUNK',
                      'SWR',
                      'SSR',
                      'CSR',
                      'APOLLO GRAPHQL',
                      'CONTEXT API',
                    ].map((technology) => (
                      <Technology label={technology} key={technology} />
                    ))}
                  </Stack>
                </Stack>
                <Stack className="gap-40">
                  <Typo variant="h4" className="text-grey-300">
                    Styling and animation
                  </Typo>
                  <Stack className="gap-12" wrap row>
                    {[
                      'EMOTION',
                      'STYLED-COMPONENTS',
                      'STITCHES',
                      'TAILWIND',
                      'PURE CSS',
                      'FRAMER MOTION',
                      'REACT SPRING',
                      'REACT NATIVE ANIMATED',
                      'MUI',
                      'MANTINE UI',
                      'CHAKRA UI',
                      'RADIX UI',
                      'GLIDE',
                    ].map((technology) => (
                      <Technology label={technology} key={technology} />
                    ))}
                  </Stack>
                </Stack>
                <Stack className="gap-40">
                  <Typo variant="h4" className="text-grey-300">
                    Testing, formatting and code monitoring
                  </Typo>
                  <Stack className="gap-12" wrap row>
                    {[
                      'JEST',
                      'REACT TESTING LIBRARY',
                      'GIT',
                      'HUSKY',
                      'ESLINT',
                      'PRETTIER',
                    ].map((technology) => (
                      <Technology label={technology} key={technology} />
                    ))}
                  </Stack>
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
