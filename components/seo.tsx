import { DefaultSeo } from 'next-seo'
const url =
  process.env.NODE_ENV === 'production'
    ? ' https://ilyassbh.me'
    : 'https://localhost:300'

const Seo: React.FC = () => (
  <DefaultSeo
    title="Ilyass Ben Hakim - Portfolio"
    description="Hey there, welcome to my portfolio, my name is Ilyass Ben Hakim - I’m a Software engineer"
    openGraph={{
      type: 'website',
      locale: 'en_IE',
      url: 'https://www.ilyassbh.me',
      site_name: 'SiteName',
      images: [
        {
          url: `${url}/images/seo.png`,
          width: 800,
          height: 600,
          alt: "Ilyass's Portfolio preview image",
        },
      ],
    }}
    twitter={{
      handle: '@dinasso1',
      cardType: 'summary_large_image',
    }}
  />
)

export default Seo
