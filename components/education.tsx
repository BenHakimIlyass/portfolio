import Stack from '../kit/stack'
import Typo from '../kit/typo'

type Props = {
  univesity: string
  degree: string
  location: string
  field: string
}

const Education: React.FC<Props> = (props) => {
  const { univesity, degree, location, field } = props

  return (
    <Stack className="gap-12">
      <Typo variant="h5" className="text-grey-500">
        {degree} degree
      </Typo>

      <Typo variant="small" className="text-grey-400">
        <Typo variant="smallSemibold" as="span" className="text-grey-400">
          {univesity}
        </Typo>{' - '}
        {location}
      </Typo>

      <Typo variant="p" className="text-grey-500">
        {field}
      </Typo>
    </Stack>
  )
}

export default Education
