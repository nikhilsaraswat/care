import { AppointmentContainer } from "../styledComponent/index";

function Appointment(props) {
  return (
    <AppointmentContainer>
      {props.p1},{props.p2},{props.p3},{props.p4} - Time: {props.Time}: 00
      {console.log(props)}
    </AppointmentContainer>
  );
}

export default Appointment;
