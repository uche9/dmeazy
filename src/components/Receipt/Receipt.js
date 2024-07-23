import './Receipt.css'
import logo from './logo.jpeg'
import background_image from  './logo.jpeg'
//import stamp from './stamp.jpeg'


export default function Receipt({data}){

    

    return(
        <div  className='receipt--container'>
             < img src={background_image} alt='b pics' style={{width:'100%', position:'absolute' , zIndex:'-1'}} />
      
            
                 <div className='receipt--form' style={{width:'95%'}}>
                         <div className='receipt' style={{marginBottom:'20px' ,textAlign:'center'}}>
                            YOUR PACKAGE STATUS
                         </div>
                         <div className='part--A' style={{borderColor:'red', borderStyle:'solid'}}>
                                <div className='heading'>
                                    <div className='receipt--logo'>
                                            <img src={logo} alt='logo' style={{width:'200px'}}/>
                                    </div>
                                    <div style={{display:'flex', flexDirection:'column' , justifyContent:'space-evenly', fontWeight:'800'}}>
                                            <div style={{fontSize:'26px', textAlign:'center'}}>DELIVERY MADE EASY</div>
                                            <div style={{display : 'flex', justifyContent:'flex-end'}}> 
                                                  <div>AIR WAYBILL</div>
                                            </div>
                                    </div>
                                </div>
                                
                                <div style={{backgroundColor:'white', fontSize:'22px',textAlign:'center'}}>Tracking Id: <b>{data.sender.trackingId}</b> </div>
                                 <div className='part--A--left' style={{ backgroundColor:'' , width:'100%', height:'500px'}}>
                                            <div className='sender'>
                                                <div style={{ fontWeight:'bold',fontSize:'18px'}}>
                                                {`1. FROM (SENDER)`} 
                                                </div>
                                               
                                                <div style={{backgroundColor:'#fff'}}>
                                                            <div>
                                                                <span>Sender Name:</span><span className='data--details'>{data.sender.senderName}</span> 
                                                            </div>
                                                            
                                                            <div>
                                                                <span>Address:</span><span className='data--details'> <b>{data.sender.address}</b></span>
                                                            </div>
                                                            <br /> 
                                                            <div className='phone'>Phone:<b><span className='data--details'>{data.sender.phone}</span></b></div>
                                                            <div className='Email'>Email:<b><span className='data--details'>{data.sender.email}</span></b></div>
                                                </div>


                                            </div>
                                            <div className='receiver'>
                                                        <div style={{ fontWeight:'bold',fontSize:'18px'}}>
                                                            {`2. TO(RECEIVER)`} 
                                                        </div>
                                                        <div style={{backgroundColor:'#fff'}}>
                                                                <div>
                                                                    Receiver Name:<span className='data--details'>{data.receiver.receiverName}</span>
                                                                </div>
                                                                
                                                                <div>
                                                                <span>Address:</span><span className='data--details'> <b>{data.receiver.address}</b></span>
                                                            </div>
                                                            <br /> 
                                                            
                                                                <div className='phone'>Phone:<b><span className='data--details'>{data.receiver.phone}</span></b></div>
                                                                <div className='Email'>Email:<b><span className='data--details'>{data.receiver.email}</span></b></div>
                                                            
                                                        </div>
                                            </div>
                                            <div style={{backgroundColor:'#fff', width:'100%' , margin:'2px'}}>
                                                Package/Consignment Origin : <span className='data--details'>{data.origin}</span>
                                             </div>
                                             <div style={{backgroundColor:'yellow', width:'100%' , margin:'2px'}}>
                                                 Package/Consignment Destination :<span className='data--details'>{data.destination}</span>
                                              </div>
                                              <div style={{backgroundColor:'#fff', width:'100%' , margin:'2px'}}>
                                           Shipping Firm :<span className='data--details'>{`DELIVERY MADE EASY`}</span>
                                              </div>
                                     
                                              <div style={{display:'flex', width:'100%' , justifyContent:'center', height:''}}>
                                      <div style={{backgroundColor:'#f00', width:'49%' , margin:'2px', fontWeight:'bold'}}>
                                            Package/Consignment Details
                                      </div>
                                      
                               </div>
                               <div style={{display:'flex', width:'100%' , justifyContent:'center', height:'8%'}}>
                                      <div style={{backgroundColor:'#fff', width:'49%' , margin:'2px'}}>
                                           Number of Pieces :<span className='data--details'>{data.sizeAndWeight.numberOfPieces}</span>
                                      </div>
                                      <div style={{backgroundColor:'yellow', width:'49%' , margin:'2px'}}>
                                           Weight : <span className='data--details'>{data.sizeAndWeight.weight}</span>
                                           <br />
                                           <br />
                                      </div>
                               </div>
                                        <div style={{display:'flex', width:'100%' , alignItems:'center' , marginTop:'20px',justifyContent:'center', height:''}}>
                                             <div style={{backgroundColor:'#fff', width:'50%' , textAlign:'center'}}>
                                                  Mode of Shipment 
                                             </div>
                                             
                                             <div style={{width:'50%', backgroundColor:"", height:''}}>       
                                                       <div>
                                                          Land: <input type='checkbox' checked={data.modeOfShipment.land} />
                                                       </div>  
                                                       <div>
                                                          Air: <input type='checkbox' checked={data.modeOfShipment.air} />
                                                       </div>
                                                       <div>
                                                          Sea: <input type='checkbox' checked={data.modeOfShipment.sea} />
                                                       </div>
                                              </div>
                                        </div>
                                 </div>               
                                </div>
                                
                                
                        

                        <div className='part--B' style={{width:'100%', marginTop:'0px', backgroundColor:'orange'}}>
                               
                               <div className="shipment--status">
                                     SHIPMENT STATUS
                              </div>
                              <div className='super--message'>
                                       <div className={data.status==='yes'? 'status--message--container':'status--message--container--alt' }>
                                           {data.statusMessage}   
                                          </div>
                              </div> 
                        </div>
                         <div style={{backgroundColor:'yellow', width:'100%' ,  margin:'2px'}}>
                                Package Description : <span className='data--details'>{data.shipmentDetails.descriptionOfCargo}</span>
                         </div>
                         <div style={{backgroundColor:'yellow', width:'100%' ,  margin:'2px'}}>
                                Total Freight Days : <span className='data--details'>{data.shipmentDetails.totalFreightDays}</span>
                         </div>
                         <div style={{backgroundColor:'yellow', width:'100%' ,  margin:'2px'}}>
                                Shipment Mode Of Payment : <span className='data--details'>{data.shipmentDetails.modeOfPayment}</span>
                         </div>
                         <div style={{backgroundColor:'yellow', width:'100%' ,  margin:'2px'}}>
                                Currency Type : <span className='data--details'>{data.shipmentDetails.currency}</span>
                         </div>
                         <div style={{backgroundColor:'red', width:'100%' , fontWeight:'600', fontSize:'20px', margin:'2px', textAlign:'center'}}>
                                Package Departure Details
                         </div>
                         <div style={{backgroundColor:'yellow', width:'100%' ,  margin:'2px'}}>
                                Depature Date : <span className='data--details'>{data.packageDeparture.date}</span>
                         </div>
                         <div style={{backgroundColor:'yellow', width:'100%' ,  margin:'2px'}}>
                                Depature Location : <span className='data--details'>{data.packageDeparture.location}</span>
                         </div>
                         <div style={{backgroundColor:'red', width:'100%' , fontWeight:'600',fontSize:'20px', margin:'2px', textAlign:'center'}}>
                                Package Destination Details
                         </div>
                         <div style={{backgroundColor:'yellow', width:'100%' ,  margin:'2px'}}>
                                Pick up Date : <span className='data--details'>{data.packageDestination.pickupDate}</span>
                         </div>
                         <div style={{backgroundColor:'yellow', width:'100%' ,  margin:'2px'}}>
                                Pick up Location : <span className='data--details'>{data.packageDestination.pickupLocation}</span>
                         </div>
                         <div style={{backgroundColor:'yellow', width:'100%' ,  margin:'2px'}}>
                                Pick up Time : <span className='data--details'>{data.packageDestination.pickupTime}</span>
                         </div>
                         <hr/>
                         <hr />
                         <div style={{backgroundColor:'red', width:'100%' , fontWeight:'600',fontSize:'20px', margin:'2px', textAlign:'center'}}>
                                Extra Info
                         </div>
                         <div style={{backgroundColor:'yellow', width:'100%' ,  margin:'2px'}}>
                                 Date : <span className='data--details'>{data.extraInfo.date}</span>
                         </div>
                         <div style={{backgroundColor:'yellow', width:'100%' ,  margin:'2px'}}>
                                Location : <span className='data--details'>{data.extraInfo.location}</span>
                         </div>
                         <div style={{backgroundColor:'yellow', width:'100%' ,  margin:'2px'}}>
                                Local time : <span className='data--details'>{data.extraInfo.localTime}</span>
                         </div>
                         <div style={{backgroundColor:'yellow', width:'100%' ,  margin:'2px'}}>
                                Activity/Status : <span className='data--details'>{data.statusMessage}</span>
                         </div>
                 </div>
                <hr />    
        </div>
    )
 }