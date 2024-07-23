//Footer style 
import '../Footer/Footer.css'

//Calculator 
import Calculator from '../Calculator/Calculator';

//Home coponents
import Welcome from '../Welcome/Welcome';
import Strength from '../Strength/Strength';
import Service from '../Service/Service';
import Expertise from '../Expertise/Expertise';



//About us components
import WhoWeAre from '../WhoWeAre/WhoWeAre';

//Contact components
import ReachUs from '../ReachUs/ReachUs';

//Trackshipment componenets
import Tracker from '../Tracker/Track';

//Serv Details
import ServDetails from '../Service/ServiceDetails/ServiceDetails';

//Calculators
import Calculators from '../Calculators/Calculators';

import './NavBar.css';
import logo from "./logo.jpeg";
import {useState, useEffect } from 'react'
import SVGData from '../SVGData/SVGData.js'



export default function Main(){


   const [activePath, setActivePath]=useState('home')  
   const [scroller, setScroller]=useState(0)
   
   useEffect(()=>{
    
    const handleScroll=()=>{
        setScroller( document.documentElement.scrollTop)
    } 
    
    window.addEventListener('scroll', handleScroll);
    
    return ()=>window.removeEventListener('scroll', handleScroll);
    
   },[scroller]) 

   

   //Rendering Nav Bar During width resize
   const [width, setWidth]=useState(window.innerWidth || 1000)
   
   
   useEffect(()=>{
  

    const handleResize=()=>{
        setWidth( window.innerWidth)
    } 
    
    window.addEventListener('resize', handleResize);
    return ()=>window.removeEventListener('resize', handleResize);
    
   },[width])


    function NavBar(){
        /* Generate link with Array */

   const link_array_data=[ 
    {
        place:'HOME',
        way:'home',
    },
    {
        place:'ABOUT US',
        way:'about_us',
    },
    {
        place:'TRACK SHIPMENT',
        way:'track_shipment',
    },
    {
        place:'SERVICES',
        way:'services',
    },
    {
        place:'CONTACT',
        way:'contact',
    },
];
         
    const  link_array=link_array_data.map(el=>{
            return( 
                <>
                         <div  id={el.way}  onClick={()=>setPath(el)}  className='link'> {el.place}</div>                
                   
                </>
                  
                  
            )
         })

               
        /* Function to set path such that new page loads a freash*/
         
         function setPath(el){
            //Scroll to top of new page
            //window.location.pathname='/'+ el.way;
            setActivePath(el.way);    
        }
            
  
       
    function NavBarSpread ({style1, style2}){
       
       //set tab color for selected tab after page loads
    
      
      return (
                <div id='nav--bar--spread' style={style1}> 
                      
                        <div className='nav--bar--container'>

                                <img className='logo' src={logo} alt='logo heres' />

                                <div className='link--search'>
                                        <div className='links'>
                                             {link_array}
                                            <div  className='search--icon' >{SVGData[2].code} </div>
                                        </div>
                                </div>
                        </div>
                        <div  className='tab' style={style2}>
                                  
                        </div>         

            </div>
           )
       }

     

         function NavBarShrink ({style1,style2}){

             
              
               const[drop,setDrop]=useState(true)

               function dropMenu(){
                setDrop(false)
               }
               function closeMenu(){
                setDrop(true)
               }

            function LinkArray({style3}){
                return (
                <div className='link--search' style={style3}>
                            <div className='links'>
                                {link_array}
                            </div>
               </div>)
            }
            return (
                      <div id='nav--bar--shrink' style={style1}>
                              <div className='nav--bar--container--shrink'>
                                   <div style={{display:'flex', justifyContent:'space-around',alignItems:'center', width:'100%' , paddingRight:'0px'}}>
                                      <img className='logo' src={logo} alt='logo heres' style={{marginLeft:'30px'}}/>

                                    
                                    <div className='link--search'>
                                         
                                         {drop? 
                                            <div onClick={dropMenu} style={{ marginLeft:'100px',width:'50%'}} >{SVGData[0].code}</div>
                                              :
                                            <div  onClick={closeMenu} style={{marginRight:'15px', width:'30px'}}> {SVGData[1].code}</div>
                                         } 
                                         
                                         
                                    </div>

                                   </div> 
                                   <div>
                                            <div  className=''  style={{display:(!drop? 'block': 'none') }} >
                                                <LinkArray style3={{display:(!drop? 'block': 'none')}} />
                                                <input type='text' className='search--box'  placeholder='search page' />   {SVGData[2].code} 
                                            </div>                                
                                            
                                    </div>
                                                    
                          </div>
                          <div  className='tab' style={style2}>
                                  
                          </div>    
                    </div>
                 )
             }
     
       return(
              
                  
            < div id='nav--bar' style={{width:'100%', height:`${width>900 ? 50 : 40 }px`}} > 
            
            
                    {/*Nav Bar Conditional rendering */} 
                    
                    
                    { scroller >=0 &&  width >=900 && <NavBarSpread style1={{ position:'relative', top: '0px'}} style2={{ height:'60px', display:'block',}}/> }
                    { scroller>80 &&  width >900  && <NavBarSpread  style1={{  position:'fixed', top:'0px'}}  style2={{  display:'none',}}/>}
                    { (scroller >=0 &&  width <900) &&  <NavBarShrink style1={{ position:'relative', top: '0px'}} style2={{ height:'69px',  display:'block',}}/>}
                    { (scroller>80 &&  width <900) && <NavBarShrink  style1={{ position:'fixed', top: '0px'}} style2={{  display:'none',}}/> }
            
            </div>

       )         
    }


            //Calculator 
            var MakePath=()=>{
              setActivePath('more_calculators')
            }


           function MoreCalculators(){
            var styles={
                     marginBottom:'20px',
                     fontSize:'20px', 
                     fontWeight:'500', 
                     height:'35px',
                     borderRadius:'3px'
                    }
            return(
             <div className='calculators'>
                   
                   <div style={{marginBottom:'20px',fontSize:'40px', fontWeight:'700'}}>?</div>
                   <div style={{marginBottom:'10px',fontSize:'18px', fontStyle:'italic'}}>Not still sure how much it will cost you!</div>
                   <div style={{marginBottom:'20px',fontSize:'28px', fontWeight:'700', textAlign:"center"}}>Open full list of extended calculators</div>
                   <button  onClick={MakePath} style={styles} >ALL CALCULATORS</button>
             </div>
     )
 }


            
            //Footer
                    function Footer(){


                const our_fleet_array_data=[
                   {a:'B2B Exchange', b:'b2b_exchange'},
                   {a:'Courier Delivery',b:'courier_delivery'} ,
                   {a:'Logistics', b:'logistics'}
                  ];
                const our_fleet_array=  our_fleet_array_data.map(el=>{
                  return(
                      <>                       
                             <div className='footer--link' onClick={()=>setServicePath(el)} style={{margin:'20px', fontSize:'15px', color:'#fff'}}>
                                  {el.a}
                             </div>                      
                      </>
                  )
                }) 
          
          
                function setServicePath (el){
                 // window.location.pathname='/service/'+el.b
                 setActivePath(el.b)
                }
                
          
          
                const our_link_array_data=[{c:'Home', d:'home'},{ c:'Contact Us', d:'contact'} ];
                const our_link_array=  our_link_array_data.map(el=>{
                  return(
                             <div className='footer--link' onClick={()=>setLinkPath(el)} style={{margin:'20px', fontSize:'15px', color:'#fff'}}>
                                  {el.c}
                             </div> 
                  )
                })  
          
                 
                function setLinkPath (el){
                  //window.location.pathname='/'+el.d
                  setActivePath(el.d)
                }
          
                function LinkDetails(props){
                  return(
                             <div  style={{width:'60%', color:'#fff'}}>
                                      <div style={{marginBottom:'20px',color:'#f33', fontWeight:'600' , fontSize:'28px'}}>
                                           {props.head}
                                      </div>
                                      <div style={{width:'130px', backgroundColor:'#fff', height:'3px', marginBottom:'20px', fontSize:'10px'}}>
          
                                       </div>
                                       <div style={{fontSize:'15px', color:'#fff'}}>
                                             {props.details}
                                       </div>
                                      
                              </div>
                  )
                }
          
              return(
                  <div className="super--footer--container" >
                           <div className='footer--container' style={{display:'flex', alignItems:'center', margin:'0px'}}>
                              <div style={{width:'45%'}}>
                                  <div style={{margin:'5px' }}  >
                                      <img src={logo}  alt='logo here' style={{width:'80%',  zIndex:'+1', borderRadius:'4px'}}/>
                                  </div>
                                  <div style={{width:'80%' ,margin:'5px', fontSize:'14px', fontWeight:'180',color:'#fff', marginBottom:'30px', }}>
                                  {
                                  `Delivery Made Easy  has remained fully dedicated to meeting their customer
                                  logistics and transportation needs. Delivery Made Easy carefully evaluates each
                                  customer and determines how to most efficiently meet those needs, while minimizing 
                                  cost & maximizing revenues.`
                                  }
                                  </div>
                                  
                                 
                              </div>  
                              
                                  
                              <div className='more--detail--container' style={{display:'flex',flexWrap:'wrap', justifyContent:''}}>            
                                  <LinkDetails head={'Our Fleet'}  details={our_fleet_array}  /> 
                                  <LinkDetails head={'Quick Links'}  details={our_link_array}  />       
                             </div>
                                  
                            
                  </div>
          
                  <div style={{ textAlign:'center', width:'100%',color:'#fff', marginBottom:'10px'}}>
                                  {`Copyright @ Delivery Made Easy. All rights reserved`}
                   </div>
          
              </div>
              )
          }
          
          
          useEffect(()=>{
           
            window.scrollTo(0,0)
          },[activePath])
            
        
         
    return(
        <div className='main--container'>
     
             
                     
            {activePath==='home' &&
              <div  style={{display:'flex', flexDirection:'column'}} > 
                    <NavBar />
                    <Welcome />
                    <Strength />
                    <Calculator />
                    <MoreCalculators />
                    <Service />
                    <Expertise />
                    <Footer />
              </div>
               
            }
            {activePath==='about_us' &&
              <div>
                    <NavBar />
                    <WhoWeAre />
                    <Footer />
              </div>
               
            }

            {activePath==='contact' &&
              <div   style={{display:'flex', flexDirection:'column'}}>                   
                    <NavBar />
                    <ReachUs />
                    <Footer />
              </div>               
            }

           {activePath==='services' &&
              <div> 
                    <NavBar />                 
                    <Service />
                    <Footer />
              </div>               
            }

           {activePath==='track_shipment' &&
              <div>
                    <NavBar />                  
                    <Tracker />
                    <Footer />
              </div>               
            }

             {activePath==='b2b_exchange' &&
              <div> 
                    <NavBar />                
                    <ServDetails myId='0' />
                    <Footer />
              </div>               
            }  
            

            {activePath==='courier_delivery' &&
              <div>  
                    <NavBar />                 
                    <ServDetails myId='1' />
                    <Footer />
              </div>               
            } 

          {activePath==='logistics' &&
              <div> 
                    <NavBar />                 
                    <ServDetails myId='2' />
                    <Footer />
              </div>               
            } 

        {activePath==='more_calculators' &&
              <div> <NavBar />
                    <Calculators/>
                    <Footer />
              </div>               
            } 
            
        </div>
        
        
     )
  }

 
