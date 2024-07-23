import { useEffect, useState } from 'react'
import './Calculator.css'


export default function Calculator(){


             //Reading window size to resize container
   const [width, setWidth]=useState(window.innerWidth || 1000)
   
   
   useEffect(()=>{
  

    const handleResize=()=>{
        setWidth( window.innerWidth)
    } 
    
    window.addEventListener('resize', handleResize);
    return ()=>window.removeEventListener('resize', handleResize);
    
   },[width])


   
    
    //total
    
        const [data, setData]=useState({
            height:0,
            width:0,
            depth:0,
            weight:0,
            distance:0,
            total:0,
            insurance:'false',
            
        })
 
            
    var handleChange=(event)=>{
        event.preventDefault()
        const name=event.target.name;
        const value=event.target.value;
        setData(prevData=>({
            ...prevData,
            [name]:Number(value),
            distance:name==='distance'? value*100:prevData.distance,
            
        }))  
    }

   
    useEffect(()=>{
         
       var  newTotal=data.height+data.width+data.depth+data.weight+data.distance;
         setData(prevData=>({
            ...prevData,
            total:newTotal
               }))
            }, [data]) 

            //Move slider

            

            useEffect( ()=>{ 
               document.getElementById('slider').style.marginLeft=`${Number(data.distance)/100}%`
            },[data.distance])

    return(
        <div className="calc--super--container" style={{height:width>900? `900px`:'900px'}}>
                <div className='calculator--container'>
                    <div className='calc--text1'>
                    Not sure how much it would cost you?
                    </div>
                    <div className='calc--text2'>
                        USE OUR CALCULATOR TO FIND OUT!
                    </div>
                    
                        <div className='text--label'>
                            <span className='text'>{'Height(cm)'}</span>
                            < input id='height'  className='input' name='height' type='text'  onChange={handleChange}/>
                        </div>
                        <div className='text--label'>
                            <span className='text'>{'Width(cm)'}</span>
                            < input id='width' className='input' name='width'onChange={handleChange} type='text'/>
                        </div>
                        <div className='text--label'>
                            <span className='text'>{'Depth(cm)'}</span>
                            <input id='depth' className='input' name='depth' onChange={handleChange} type='text'/>
                        </div>
                        <div className='text--label'>
                            <span className='text'>{'Weight(kg)'}</span>
                            <input id='weight' className='input' name='weight' onChange={handleChange} type='text'/>
                        </div>
                        <div className='slider--container'>
                            <div className='text'>{'Distance(km)'}</div>
                            <div style={{width:'100%', height:'100px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                                <div className='slider--track' >
                                    <div className='slider' id='slider'>{data.distance}</div>
                                </div>
                                <div>
                                <input type='range' className='range' id='range' name='distance' onChange={handleChange} step='5' defaultValue={0} min='0'  max='100'/>
                                </div>
                            </div>
                            
                            
                        </div>
                        
                        <div className='text--label' style={{justifyContent:'flex-start',  marginBottom:'25px'}} >
                            <span className='text' style={{width:'30%'}}>Type of Service</span>
                            <select style={{width:'68%', height:'30px'}}>
                                <option>
                                    <h3>Select</h3>
                                </option>
                                <option>
                                    <h3>{`Regular: `}</h3>
                                    <div>Within 2working days</div>
                                </option>
                                <option>
                                <h3>{`Same day: `}</h3>
                                    <div><b>Same Day</b></div>
                                </option>
                                <option>
                                    <h3>{`Direct: `}</h3>
                                    <div>Regular, door to door</div>
                                </option>
                                
                            </select>
                        </div>
                        
                        <div className='text--label' style={{justifyContent:"flex-start"}}>
                            <span className='text' >{'Add Insurance'}</span>
                            <input type='checkbox' className='check--box' />
                        </div>
                        
                        <div className='text--label'>
                            <span className='total' >{`TOTAL >>>`}</span> 
                            <span className='total--value' id='total--value'>{ ` $ ${data.total.toFixed(2)}`} </span> 
                        </div>
                </div>
           
        </div>
    )
}