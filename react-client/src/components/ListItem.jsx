import React from 'react';
const imageStyle = {
  float: 'left',
  height:'70px',
  width:'70px'
}
const wholeDiv = {
  height: 'auto',
  padding: '1%'
}
const ulStyle = {
  marginLeft: '60px'
}

const ListItem = (props) => (
  <div style={wholeDiv}>
    <img style={imageStyle} src={ props.item.thumbnail }/>
    <ul style={ulStyle}>
    <li><b>Dish: { props.item.title }</b></li>
    <li>{ props.item.ingredients }</li>
    <li><a href={props.item.href}>Make this now</a></li>
    </ul>
    <button>save</button>
  </div>
)

export default ListItem;