import React from 'react';
import {connect} from 'react-redux';

class EditNote extends React.Component{
    submit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newcontent = this.getContent.value;
        const data = {
            id: this.props.note.id,
            newTitle,
            newcontent
        }
        this.props.dispatch({type:'UPDATE', id: this.props.note.id, data})
    }
    render(){
        return (
            <div key={this.props.note.id}>
                <form onSubmit={this.submit}>
                    <input required type='text' ref={(input) => this.getTitle =input} 
                    defaultValue={this.props.note.title} placeholder='NoteTitle'/><br/><br/>
                    <input required rows='5' cols='28' ref={(input) => this.getContent = input}
                    placeholder="content" defaultValue={this.props.note.content}  />
                    <button className='ui button'>Update</button>
                </form>
            </div>
        );
    }
}

export default connect()(EditNote);