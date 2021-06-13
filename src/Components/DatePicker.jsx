import React from 'react'
import DateView from 'react-datepicker'
import { Field} from 'formik'
import 'react-datepicker/dist/react-datepicker.css'

function DatePicker (props) {
  const { label, name, ...rest } = props
  return (
    <div>
      <Field  name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={val => setFieldValue(name, val)}
              />
          )
        }}
      </Field>
    </div>
  )
}

export default DatePicker