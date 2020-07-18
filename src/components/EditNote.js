import React from 'react';
import {connect} from 'react-redux';

class EditNote extends React.Component {
    state = {title:this.props.selectedNote.title, content:this.props.selectedNote.content}
    componentDidMount(){
        this.setState({
            title : this.props.selectedNote.title //? this.props.selectedNote.title: ""
        })
        this.setState({
            content : this.props.selectedNote.content //? this.props.selectedNote.content: ""
        })
    }
    onTitleChange = (event) => {
        this.setState({ title: event.target.value });
    }
    onContentChange = (event) => {
        this.setState({ content: event.target.value });
    }
    onSubmit = (event) => {
        event.preventDefault()
        let payload = {
            title: this.state.title,
            content:this.state.content,
        }
        //console.log(payload)
    }
       
    renderEditNote(){
       
            return(
                <div className='ui container divided grid' key={this.state.content}>
                    <h2 className='ui dividing header'>Edit Note</h2>
                    
                    <div className="ui form">
                    <div className="field">
                        <label>Title</label>
                        <input value={this.state.title} 
                        onChange={this.onTitleChange}
                        />
                    </div>
                    <div className="field" >
                        <label>Content</label>
                        <textarea value={this.state.content}
                        onChange={this.onContentChange}
                        ></textarea>
                    </div>
                    <button className='ui button'
                        onClick={this.onSubmit}>
                           Update
                            </button>
                </div></div>
            );
        
    }

    render(){
        //console.log(this.stat.title)
        return <div>{this.props.selectedNote.title  ?  this.renderEditNote() : null}</div>
    }
}
const mapToStateProps = (state) => {
    return {selectedNote:state.editNote}
}

export default connect(mapToStateProps)(EditNote);