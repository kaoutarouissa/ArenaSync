function Statusbadge({status}){
    
 const bgcolor = status === "On Going" ? "green" : status === "Upcoming" ? "blue" : status === "Pending" ? "red":"transparent"
 const textcolor= status === "On Going" ? "white" : status === "Upcoming" ? "white" : status === "Pending" ? "white":"black"
  return <div className="divstatus" style={{
        backgroundColor: bgcolor,
    color:textcolor}}> {status}</div>;
}
export default Statusbadge;