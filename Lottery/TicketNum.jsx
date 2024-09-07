import "./TicketNum.css";
export default function TicketNum({ num }) {
  return (
    <div className="ticket-num">
      <p>Ticket Number</p>
      <h1>{num}</h1>
    </div>
  );
}
