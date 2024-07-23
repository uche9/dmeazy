//import GhostBar from './GhostBar/GhostBar.js'

import Welcome from './Welcome/Welcome.js'
import Strength from './Strength/Strength.js'
import Service from './Service/Service.js'
import Expertise from './Expertise/Expertise.js'
import Footer from './Footer/Footer.js'

export default function Home(){
return(
    <div  style={{display:'flex', flexDirection:'column'}}>
          
          
          <Welcome />
          <Strength />
          <Service />
          <Expertise />
         
    </div>
)
}