import React from 'react';
import './Listitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';
function ListItem(props){
    console.log(props);
    const deleteItem = key =>
    {

      const newList=  props.items.filter((item)=>{
          return  item.key !== key;
        });
        props.updateItemList(newList);
    };
    // const items = props.items;
    // const listItems = items.map(item =>
    // {
    //     return <div className="list" key={item.key}>
    //         <p>
    //             <input type="text" id={item.key} value={item.text} onChange={(e)=>{props.setUpdate(e.target.value,item.key)}}></input>
    //             <span>
    //         
    //     </span></p>
            
    //     </div>
    // })
    // return (
    // <FlipMove duration={500} easing="ease-in-out">{listItems}</FlipMove>
    // )
   
    return(
        <div >
            {props.items.map(itemobj=>{
                return (
                    <div className="list">
                        <p>
                        <input value={itemobj.item}></input>
                        <span>
                        <FontAwesomeIcon className="faicons" icon="trash" onClick={() => deleteItem(itemobj.key)} />
                        </span>
                        </p>
                        </div>
                );
            })}

        </div>
    )
}


export default ListItem;