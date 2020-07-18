import React from 'react';
import {connect} from 'react-redux';
import {editNote} from '../actions/action';

class NoteList extends React.Component{
    renderList(){
       
        return this.props.notes.map((note) => {
            return (

            <div className='ui container divided grid' key={note.content}>
                <div >
                   <h3 >Title:{note.title}</h3>
                    <p>{note.date.toLocaleString()}</p>
                    <p >Content:{note.content}</p>
                    <div className='right floated content'>
                    <button className='ui button primary'
                    onClick={() => this.props.editNote(note)}
                    
                    >Edit</button>
                    </div>
                </div>
            </div>
            );
        })
    }
  render(){
  return <div className='ui container divided grid'>
      <h1 className='ui dividing header'>List of Notes</h1>
      {this.renderList()}</div>
}
}
const mapsStateToProps = (state) => {
    return {notes:state.addNote}
}
export default connect(mapsStateToProps, {editNote})(NoteList);



    

