import { Count } from '../Count'
import { Destination } from '../Destination'
import { Message } from '../Message'
import { TimeSelect } from '../TimeSelect'

export const Form = () => {
  return (
    <div>
      <Destination />
      <TimeSelect />
      <Count />
      <Message />
    </div>
  )
}
