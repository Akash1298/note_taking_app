import React from 'react';
import { connect } from 'react-redux';

class Note extends React.Component{
    render(){
        localStorage.setItem('title',this.props.note.title)
        localStorage.setItem('content', this.props.note.content)
        localStorage.setItem('date', this.props.note.date.toLocaleString())
        console.log(localStorage.getItem('title'))
        return (
            
            <div>
                <h4>{localStorage.getItem('title')}</h4>
                 <p>{localStorage.getItem('content')}</p>
                <p>{localStorage.getItem('date')}</p>
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