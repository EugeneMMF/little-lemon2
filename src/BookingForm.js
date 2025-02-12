import './BookingForm.css';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Textarea,
  Select
} from '@chakra-ui/react';
import { FormikProvider } from 'formik';

export default function BookingForm({props}) {
  const { availableTimes, dispatchAvailableTimes, formik } = props;

  return (
    <FormikProvider value=''>
        <form onSubmit={ (e) => {e.preventDefault(); formik.handleSubmit(e)} } className='booking-form'>
          <VStack>
            <FormControl isInvalid={formik.touched.date && formik.errors.date}>
              <FormLabel htmlFor='date'>Choose Date <span>*</span></FormLabel>
              <Input
                id='date'
                name='date'
                type='date'
                {...formik.getFieldProps('date')}
                onChange={(e) => {formik.getFieldProps('date').onChange(e); dispatchAvailableTimes({date: e.target.value})}}
              />
              <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.time && formik.errors.time}>
              <FormLabel htmlFor='time'>Choose Time <span>*</span></FormLabel>
              <Select
                id='time'
                name='time'
                placeholder="Choose Time"
                {...formik.getFieldProps('time')}
              >
                { availableTimes.map(option => <option value={option} key={option}>{option}</option>) }
              </Select>
              <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
              <FormLabel htmlFor='guests'>Number of Guests <span>*</span></FormLabel>
              <Input
                id='guests'
                name='guests'
                type='number'
                {...formik.getFieldProps('guests')}
              />
              <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.occasion && formik.errors.occasion}>
              <FormLabel htmlFor='occasion'>Occasion <span>*</span></FormLabel>
              <Select
                id='occasion'
                name='occasion'
                placeholder="Select Occasion"
                {...formik.getFieldProps('occasion')}
              >
                <option value="other" key="other">Other</option>
                <option value="birthday" key="birthday">Birthday</option>
                <option value="anniversary" key="anniversary">Anniversary</option>
              </Select>
              <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='extraInformation'>Additional Information</FormLabel>
              <Textarea
                id='extraInformation'
                name='extraInformation'
                placeholder='Any extra information you may want to include...'
                {...formik.getFieldProps('extraInformation')}
              />
            </FormControl>
            <input type="submit" className="call-to-action" value="Make Your Reservation" aria-description='Button to submit the form data' aria-label='Submit Form' />
          </VStack>
        </form>
    </FormikProvider>
  )
}