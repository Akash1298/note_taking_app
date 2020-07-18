import React from 'react';
import {connect} from 'react-redux';

class NoteForm extends React.Component{

    onSubmission = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const content = this.getContent.value;
        const data = {
            id: this.props.date,
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
        <div>
            <h1>Add Notes</h1>
            <form onSubmit={this.onSubmission}>
                <input required type="text" placeholder="Note Title" ref={(input) => this.getTitle = input } /><br /><br />
                <textarea required rows="5" cols="28" placeholder="Content" ref={(input) => this.getContent = input } /><br /><br />
                <button className='ui button'>Add</button>
            </form>
        </div>
        );
    }
}

export default connect()(NoteForm);