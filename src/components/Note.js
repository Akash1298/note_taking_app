import React from 'react';
import { connect } from 'react-redux';
var ls = require('local-storage');
class Note extends React.Component{
    render(){
       ls.set('title',this.props.note.title);
       ls.set('content', this.props.note.content);
       ls.set('date', this.props.note.date.toLocaleString());
       ls.set('id',this.props.note.id);
        console.log(ls.get('title'));
        console.log(ls.get('content'));
        console.log(ls.get('date'));
        console.log(ls.get('id'));
        return (
            
            <div >
               
                <h4>{ls.get('title')}</h4>
                <p>{ls.get('content')}</p>
                <p>{ls.get('date')}</p>
                <button className='ui button'
                onClick={() => this.props.dispatch({type:'EDIT_NOTE', id:ls.get('id')})} 
                style={{backgroundColor: "green", color: 'white'}} >
                EDIT</button>
                <button 
                onClick={()=>this.props.dispatch({type:'DELETE_NOTE',id:ls.get('id')})}
                className='ui button'
                style={{backgroundColor: "red", color: 'white'}}
                >DELETE</button>
            </div>
        );
    }
}

export default connect()(Note);