import React, { Component } from 'react';
import {connect} from 'react-redux';
import Note from './Note';
import EditNote from './EditNote';

class AllNotes extends Component {
  render() {
    return (
    <div>
      <h1 className='ui dividing header'>All Notes</h1>
        {this.props.notes.map((note) => (
          
            <div key={note.id}>
                {note.edit ? <EditNote note={note} key={note.id}/> :
            <Note key={note.id} note={note}/>}
            </div>
        ))}
    </div>
    );
   }
}
const mapStateToProps = (state) => {
    return {notes: state}
}

export default connect(mapStateToProps)(AllNotes);