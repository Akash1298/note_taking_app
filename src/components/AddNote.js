import React from 'react';
import {connect} from 'react-redux';

import {createNote, editNote} from '../actions/action';

class AddNote extends React.Component {
   
    state = {title:'' , content:''}
    
    onTitleChange =(event) => {
        this.setState({title:event.target.value});
    }
    onContentChange =(event) => {
        this.setState({content:event.target.value});
    }
    onFormSubmit = (event) => {
       event.preventDefault()
       this.props.onFormSubmit(this.state.title);
       this.props.onFormSubmit(this.state.content);
      
       this.props.createNote((this.props.date), (this.state.title), (this.state.content))
    }
    renderAddNote() {
        return <div className='ui container'>
    <form onSubmit={this.onFormSubmit} className='ui form'>
        <h2 className="ui dividing header">Add Note</h2>
            <div className="ui form">
            <div className="field">
                    <label>Title</label>
                    <input  value={this.state.title} 
                    onChange={this.onTitleChange}/>
                </div>
                <div className="field" >
                    <label>Content</label>
                    <textarea value={this.state.content}
                      onChange={this.onContentChange}
                    ></textarea>
                </div>
            </div>
        </form>
    </div>    
    }
render(){
return <div className='ui container'>
        <div className='ui divided list'>{this.renderAddNote()}</div>
</div>        
}}

const mapStateToProps = (state) => {
    console.log(state,"state")
     return {notes:addNote}
}

    export default connect(mapStateToProps,(createNote))(AddNote);
    

