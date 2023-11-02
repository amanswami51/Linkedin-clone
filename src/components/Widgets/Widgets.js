import React from 'react';
import './Widgets.css';
import widgetData from "./widgetData.json";

const WidgetItem = (props)=>(
  <div className='widgetitem'>
    <h4 className='widgets__news'>{props.number}. {props.news}</h4>
    <div className='timeplusreader'>
      <p>{props.time}</p>
      <p>{props.readers}</p>
    </div>
  </div>
)
function Widgets(){
  return (
    <div className='widgets'>
      <h1>Linkedin News</h1>
      {widgetData.map((i)=>{
        return <WidgetItem key={i.id} number={i.id} news={i.news} time={i.timePosted} readers={i.numReader}/>
      })}

    </div>
  )
}

export default Widgets
