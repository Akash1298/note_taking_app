import React from 'react';
import { connect } from 'react-redux';

class Note extends React.Component{
    render(){
        return (
            <div>
                <h2>{this.props.note.title}</h2>
                <p>{this.props.note.id.toLocaleString()}</p>
                <p>{this.props.note.content}</p>
                <button className='ui button'
                onClick={() => this.props.dispatch({type:'EDIT_NOTE', id:this.props.note.id})} >
                EDIT</button>
                <button 
                onClick={()=>this.props.dispatch({type:'DELETE_NOTE',id:this.props.note.id})}
                className='ui button'>DELETE</button>
            </div>
        );
    }
}

export default connect()(Note);