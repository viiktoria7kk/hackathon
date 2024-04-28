import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '~/components/Accordion'
import { FAQList } from '~/containers/home/constants'

const FAQContainer = () => {
  const FAQItems = FAQList.map(({ title, description }, i) => (
    <Accordion collapsible key={title} type='single'>
      <AccordionItem value={`item-${i}`}>
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{description}</AccordionContent>
      </AccordionItem>
    </Accordion>
  ))
  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <h3 className='text-3xl text-foreground font-bold'>
        Питання та відповіді
      </h3>
      <div className='w-full'>{FAQItems}</div>
    </div>
  )
}

export default FAQContainer
