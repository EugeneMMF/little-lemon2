// export default function BookingForm({props}) {
//   const { date, time, guests, occasion, availableTimes, dispatchAvailableTimes, setDate, setTime, setGuests, setOccasion, submitForm } = props;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     submitForm({date, time, guests, occasion});
//   }

//   return (
//     <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}}onSubmit={ (e) => handleSubmit(e) }>
//       <label htmlFor="res-date">Choose Date</label>
//       <input type="date" id="res-date" value={date} onChange={(e) => {
//           setDate(e.target.value);
//           dispatchAvailableTimes({date: e.target.value});
//         }} required={true} />
//       <label htmlFor="res-time">Choose Time</label>
//       <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
//         { availableTimes.map(option => <option value={option} key={option}>{option}</option>) }
//       </select>
//       <label htmlFor="guests">Number of Guests</label>
//       <input type="number" id="guests" placeholder="1" min={1} max={10} value={guests} onChange={(e) => setGuests(e.target.value)} />
//       <label htmlFor="occasion">Occasion</label>
//       <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
//         <option value="" key="no-occasion">Select Occasion</option>
//         <option value="birthday" key="birthday">Birthday</option>
//         <option value="anniversary" key="anniversary">Anniversary</option>
//       </select>
//       <input type="submit" className="call-to-action" style={{fontSize: '12pt'}} value="Make Your Reservation" />
//     </form>
//   )
// }

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
            {/* <Button type='submit'>
              <Text>Make Reservation</Text>
            </Button> */}

            <input type="submit" className="call-to-action" value="Make Your Reservation" aria-label="On Click" />
            {/* <label htmlFor="time">Choose Time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
              { availableTimes.map(option => <option value={option} key={option}>{option}</option>) }
            </select>
            <label htmlFor="guests">Number of Guests</label>
            <input type="number" id="guests" placeholder="1" min={1} max={10} value={guests} onChange={(e) => setGuests(e.target.value)} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
            </select>
            <input type="submit" className="call-to-action" style={{fontSize: '12pt'}} value="Make Your Reservation" /> */}
          </VStack>
        </form>
    </FormikProvider>
  )
}