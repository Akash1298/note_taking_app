import React from 'react';
import {connect} from 'react-redux';
import { v1 as uuidv1 } from 'uuid';

class NoteForm extends React.Component{

    onSubmission = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const content = this.getContent.value;
        localStorage.setItem('date', this.props.date);
        localStorage.setItem('title', title);
        localStorage.setItem('content', content);
        const data = {
            id: uuidv1(),
            date: this.props.date,
            title,
            content,
            edit: false
        }
        
        
        //console.log(data)
        this.props.dispatch({
            type:'ADD_NOTE', data
        });
        this.getTitle.value = '';
        this.getContent.value = '';
    }

render(){
    return (
        <div className='ui form'>
            <br/>
            <h1 className='ui dividing header'>Add Notes</h1>
            <form onSubmit={this.onSubmission}>
                <input required type="text" placeholder="Note Title" ref={(input) => this.getTitle = input } /><br /><br />
                <textarea required rows="5" cols="28" placeholder="Content" ref={(input) => this.getContent = input } /><br /><br />
                <button className='ui button' style={{backgroundColor: "green", color: 'white'}}>Add</button>
            </form>
        </div>
        );
    }
}

export default connect()(NoteForm);