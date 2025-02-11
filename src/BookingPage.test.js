import { render, screen } from "@testing-library/react";
import BookingPage from "./BookingPage";
import Main from "./Main";

test('Renders the BookingForm heading', () => {
  render(<BookingPage props={{availableTimes:['17:00', '18:00']}} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})

test('Test that the initialize function returns the correct value', () => {
  expect(Main.initializeTimes()).toBeInstanceOf('object')
})