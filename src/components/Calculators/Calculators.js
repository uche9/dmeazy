import SVGData from '../SVGData/SVGData'
import './Calculators.css'
import image1 from './image.jpeg'
import { useState,useEffect } from 'react'

export default function Calculators(){

//Rendering Nav Bar During width resize
const [width, setWidth]=useState(window.innerWidth || 1000)
   
   
useEffect(()=>{


 const handleResize=()=>{
     setWidth( window.innerWidth)
 } 
 
 window.addEventListener('resize', handleResize);
 return ()=>window.removeEventListener('resize', handleResize);
 
},[width])

var calc_data=[
    {
        image:SVGData[10].code,
        name:'shipping',
        description:`The first methods of road transport were horses, oxen or even humans carrying goods.`
    },
    {
        image:SVGData[11].code,
        name:'courier delivery',
        description:`We offer this service for your shipments that need to be custom cleared and 
                     that need to be sent economically or for shipments that cannot be sent as a
                     courier shipment due to size or weight limit restrictions.
                     You can opt for a door to door service or a Door to Airport Service.`
    },
    {
        image:SVGData[12].code,
        name:'Logistics',
        description:`A warehouse is a commercial building for storage of goods. Warehouses are used by importers, exporters etc.`
    },
]

var calc_array=calc_data.map(el=>{
    return(
             <div style={{width:'400px', marginTop:'20px', marginBottom:'40px', display:"flex",alignItems:'center', flexDirection:"column",  justifyContent:'center'}}>
                  <div className='calc--icon' style={{marginBottom:'20px', }}>{el.image}</div>
                  <div style={{marginBottom:'10px', fontSize:'24px' , fontWeight:'300' ,fontStyle:'italic'}}>{el.name}</div>
                  <div styel={{fontSize:'18px'}}>{el.description}</div>
             </div>
    )
})
    return(
        <div className='calculators--container'>
            
                     <div className="container--welcome--service"   style={{height:`${width>900? 650 : 550}px`}}> 
                        <img src={image1}   style={{height:`${width>900? 550 : 550}px`}} alt='back-pics' className="background-image-1" />
                            <div className='message--container' >
                                <p className='upper--text--service'>{'How much do we charge?'}</p>
                                <div className='underline--service' ></div>
                                <p className='lower--text--service'>{'COST CALCULATORS'}</p>
                            </div>
                      </div>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                        <p style={{margin:'30px', fontSize:'30px' }}>PLEASE SELECT A CALCULATOR</p>
                        <div style={{width:'100%', display:'flex', justifyContent:'center',  flexWrap:'wrap'  }}>
                            {calc_array}
                        </div>
                    </div>
        </div>
    )
}