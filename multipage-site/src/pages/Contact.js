import { useLocation } from "react-router-dom"


export default function Contact() {
  const queryString = useLocation().search
  console.log(queryString)
 
  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")
 
  return (
    <div>
      <h2>Hey Visitor {name}, Contact Us!</h2>
      <p>Feel free to reach out to us. We are happy to help you with any questions or concerns you may have.</p>
      <p>if you have any questions or concerns, please feel free to contact us. We are always happy to help. But please excuse us for any delays in response. </p>


      <h3>Our Contact Information:</h3>
      <h4>MC Clare (@emceeclams)</h4>
      <li>Email: emceeclams@nmtacademy.edu.pea</li>
      <li>Phone: 1233-456-7870</li>
      <li>socials : @emceeclams in all platforms</li>


      <h4>John M. (@johnm_90)</h4>
      <li>Email: johnmimi09@esford.edu.pea</li>
      <li>Phone: 1233-009-1230</li>
      <li>socials : @johnm_90 in all platforms [barely active] </li>


      <h4>Jane Doe (@janeyreacts)</h4>
      <li>Email: janeyreacts@gmael.com</li>
      <li>Phone: N/A </li>
      <li>socials : @janeyreacts in ourtube and Why (formerly known as Toaster) </li>
    </div>
  )
}
