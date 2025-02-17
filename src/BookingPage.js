import './BookingPage.css';
import BookingForm from "./BookingForm";
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function BookingPage({ props }) {
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: null,
      occasion: "",
      extraInformation: ""
    },
    onSubmit: (values) => props.submitForm(values),
    validationSchema: Yup.object({
      date: Yup.date().required("Required.").min(new Date().toLocaleDateString(), `The soonest allowable date is today: ${new Date().toLocaleDateString()}.`),
      time: Yup.string().required("Required."),
      guests: Yup.number().required("Required.").min(1, "Must be at least 1.").max(10, "Must be at most 10."),
      occasion: Yup.string().required("Required. If none, or not in list, choose 'Other'.")
    })
  })

  return (
    <section className="booking-section grid-adjustable-columns">
      <h2 className='sub-title center text-primary-green'>Book Now</h2>
      <button className='call-to-action' onClick={formik.resetForm} aria-description='Button to reset the form data' aria-label='Reset Form'>Reset Form</button>
      <BookingForm props={{...props, formik}} />
    </section>
  )
}