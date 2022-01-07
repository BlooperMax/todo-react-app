import { DateTime } from 'luxon';
import React from 'react';

export const TodoItem = ({item,items,setItems})=>{

  const {title,date,check} = item;
  const {year,month,day,hour,minute} = DateTime.fromMillis(date).toObject();

  const minuteConvertion = (`${minute}`.length) == 1 ? `0${minute}` : minute;

  const handleItemCheck = () => {

    const itemsSave = items.map( i => {
      if (i.date === item.date){

        const checkAct = ( check === '')? 'checked' : '';

        return {
          title,
          date,
          check: checkAct
        }
      }

      return i
    })

    setItems(itemsSave);
    localStorage.setItem('items',JSON.stringify(itemsSave));
  }

  const handleDeleteItem = (e) => {
    e.preventDefault();

    const itemsSave = items.filter( i => i.date !== item.date)

    setItems(itemsSave);
    localStorage.setItem('items',JSON.stringify(itemsSave));
  }

  return (
      <div className="list_item">
        <input 
          type="checkbox" 
          checked={check}
          onChange = {handleItemCheck}
          className='checkbox'
        />
        <p>
          {title}
        </p>
        {/* <time>
          {date}
        </time> */}
        <div className='row'>
          <div className='date_item'>
            <span> {year}/{month}/{day} </span>
            <time className='time_item'> {hour}:{minuteConvertion} </time>
          </div>
          <button
            className='delete_button'
            onClick={handleDeleteItem}
          >
            <i className='fas fa-trash'></i>
          </button>
        </div>
      </div>
  )
}