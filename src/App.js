import React from 'react';
import logo from './logo.svg';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import ListItem from './ListItem';

library.add(faTrash)
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItems:{
        text:"",
        key: ""
      }
    }
    this.handleInput=this.handleInput.bind(this);
    this.addItems=this.addItems.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.setUpdate=this.setUpdate.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItems:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }

  addItems(e){
    e.preventDefault();
    const newItem=this.state.currentItems;
    console.log(newItem);
    if(newItem.text!='')
    {
      const newItems=[...this.state.items,newItem];
      this.setState({
        items:newItems,
        currentItems:{
          text:'',
          key:''
        }
      })
    }
  }

  deleteItem(key)
  {
    const filteritem=this.state.items.filter(item=>
      item.key!==key);
      this.setState({
        items:filteritem
      })
  }
  setUpdate(text,key)
  {
    const items=this.state.items;
    items.map(item=>{
      if(item.key===key)
      {
        item.text=text
      }
    })
    this.setState({
      items:items
    })
  }
  render() {
    return (
     <div className="App">
       <header>
       <form id="to-do-form" onClick={this.addItems}>
        <input type="text" placeholder="Enter Text" value={this.state.currentItems.text} onChange={this.handleInput}></input>
        <button type="submit">Add</button>       
       </form>
     </header>
     <ListItem items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}></ListItem>
     </div>
    );
  }
}

export default App;
