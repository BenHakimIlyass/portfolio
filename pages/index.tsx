import type { NextPage } from 'next'
import Head from 'next/head'

import * as Icon from '../kit/icon'
import Typo from '../kit/typo'
import Stack from '../kit/stack'
import Career from '../components/career'

const Home: NextPage = () => {
  return (
    <div className="flex w-full flex-1 flex-col py-140 sm:px-18 md:px-40 bg-slate-100 h-fit">
      <Head>
        <title>{"Ilyass's"} portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full max-w-md flex-1 flex-col m-auto">
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

                {/* 2021 - 2022 */}
                <Stack className="gap-40">
                  <Typo variant="h4" className="text-grey-300">
                    2021 - 2022
                  </Typo>
                  <Career
                    position="Frontend engineer"
                    mode="fulltime"
                    period="Oct 2021 - Present"
                    company="Monk"
                    location="France"
                    description="AI Powered car damage inspection, based on a cross-platform React Native SDK and a set of frontend packages, combined in a RN application."
                  />
                  <Career
                    position="Frontend developer"
                    mode="part-time"
                    period="Jan 2021 - Jun 2021"
                    company="Nvision"
                    location="Luxembourg"
                    description="Real estate platform for buildings management."
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
                    location="Kuwait"
                    description="A fiverr like, freelancing/recruitment platform based on the GCC."
                  />
                  <Career
                    position="Co-founder"
                    mode="side project"
                    period="Jan 2020 - Present"
                    company="Gfree"
                    location="Earth"
                    description="A community platform for everything Gluten-free related."
                  />

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
                      location="France"
                      description="An AI powered hiring platform, taking care of the matching process between a resume and a job offer."
                    />
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
                </a>
                <a
                  href="mailto:ilyassbenhakim2@gmail.com"
                  target="_blanc"
                  rel="noopener noreferrer"
                >
                  <Icon.Mail />
                </a>
              </Stack>
            </Stack>
          </footer>
        </Stack>
      </div>
    </div>
  )
}

export default Home
