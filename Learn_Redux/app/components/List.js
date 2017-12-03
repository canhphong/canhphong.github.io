import React from 'react';
import Note from './Note.js';
import NoteForm from './NoteForm.js';
class List extends React.Component{
  constructor(props) {
    super(props);
    this.state = {array: ['Text 1', 'Text 2', 'Text 3', 'Text 4']}
  }
// function remove
remove(index) {
  this.state.array.splice(index, 1);
  this.setState(this.state);
}

addNote(note) {
  this.state.array.push(note);
  this.setState(this.state);
}
  render(){
    return (
      <div>
        <NoteForm handleAdd={this.addNote.bind(this)}  />
        {this.state.array.map((e, i) => <Note index={i}
          handleRemove={this.remove.bind(this)} key={i}>{e}</Note>)}
      </div>
    )
  }
}

module.exports = List;
