import Stack from '../kit/stack'
import Typo from '../kit/typo'

type Props = {
  position: string
  mode: string
  period: string
  company: string
  location: string
  description: string
}

const Career: React.FC<Props> = (props) => {
  const { position, mode, period, company, location, description } = props

  return (
    <Stack className="gap-18">
      <Stack className="gap-6">
        <Typo variant="h5" className="text-grey-500">
          {position}{' '}
          <Typo
            variant="h5"
            as="span"
            className="italic font-regular"
          >
            {mode}
          </Typo>
        </Typo>
        <Typo variant="h5" className="text-grey-300">
          {period}
        </Typo>
        <Typo variant="small" className="text-grey-400">
          <Typo variant="smallSemibold" as="span">
            {company} -{' '}
          </Typo>
          {location} (remote)
        </Typo>
      </Stack>
      <Typo variant="p" className="text-grey-500">
        {description}
      </Typo>
    </Stack>
  )
}

export default Career
