import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> What's in your fridge </h4>
    We found you { props.items.length } recipes.
    { props.items.map((item,i) => <ListItem item={item} key={i}/>)}
  </div>
)

export default List;