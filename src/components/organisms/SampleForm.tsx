import { Button } from '@/components/atoms/Button'
import { InputGroup } from '@/components/molecules/InputGroup'

export const SampleForm = () => {
  return (
    <form method="GET" action="#">
      <div className="mb-6">
        <InputGroup
          title="Name"
          labelProps={{
            htmlFor: 'name',
          }}
          inputPorps={{
            id: 'name',
            name: 'name',
            type: 'text',
            placeholder: 'michael',
            required: true,
          }}
        />
      </div>
      <div className="mb-6">
        <InputGroup
          title="Email"
          labelProps={{
            htmlFor: 'email',
          }}
          inputPorps={{
            id: 'email',
            name: 'email',
            type: 'email',
            placeholder: 'info@example.com',
            required: true,
          }}
        />
      </div>
      <div className="mb-6">
        <InputGroup
          title="Tel"
          labelProps={{
            htmlFor: 'tel',
          }}
          inputPorps={{
            id: 'tel',
            name: 'tel',
            type: 'tel',
            placeholder: '000-000-0000',
            required: true,
          }}
        />
      </div>
      <div className="text-center">
        <Button
          label="Button"
          buttonProps={{
            type: 'submit',
          }}
        />
      </div>
    </form>
  )
}
