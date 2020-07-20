import React from 'react';
import { connect } from 'react-redux';

class Note extends React.Component{
   
    render(){
       return (
             <div >
                <h4>{this.props.note.title}</h4>
                <p>{this.props.note.content}</p>
                <p>{this.props.note.date}</p>
                <button className='ui button'
                onClick={() => this.props.dispatch({type:'EDIT_NOTE', id:this.props.note.id})} 
                style={{backgroundColor: "green", color: 'white'}} >
                EDIT</button>
                <button 
                onClick={()=>this.props.dispatch({type:'DELETE_NOTE',id:this.props.note.id})}
                className='ui button'
                style={{backgroundColor: "red", color: 'white'}}
                >DELETE</button>
            </div>
        );
    }
}

export default connect()(Note);