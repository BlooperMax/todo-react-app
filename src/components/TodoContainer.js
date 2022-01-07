import React, { useState } from 'react';
import { TodoItem } from './TodoItem';

export const TodoContainer = ({items,setItems})=>{
  const [filter,setFilter] = useState('all')

  return (
      <>
        <div className='list_out_container'>
          <article className="list_container">
              {
                  (filter === 'all' && items.map(
                      (item,i) => 
                          <TodoItem 
                              key={i} 
                              item={item}
                              items={items}
                              setItems={setItems}
                          />
                      )) 
                      || 
                      items
                          .filter(i => i.check === filter)
                          .map((item,i) => 
                          <TodoItem 
                              key={i} 
                              item={item}
                              items={items}
                              setItems={setItems}
                          />
                      )
              }
            </article>
        </div>
          <footer className="app_footer">
            <p>Total: {items.length}</p>
            <div className='count_items'>
              Checked:
              <span>{items.filter(i => i.check === 'checked').length}</span>
            </div>
            <div className='count_items'>
              Unchecked:
              <span>{items.filter(i => i.check === '').length}</span>
            </div>
            <span>
              Filter by:
              <select 
                className="app_select" 
                name="select" 
                defaultValue={filter}
                onChange={({target}) => setFilter(target.value)}
              >
                <option value="all">All</option>
                <option value="checked">Checked</option>
                <option value="">Unchecked</option>
              </select>
            </span>
          </footer>
      </>
  )
}