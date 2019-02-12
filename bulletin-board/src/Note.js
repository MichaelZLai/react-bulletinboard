import React, {Component} from 'react'
import {FaPencilAlt} from 'react-icons/fa'
import {FaTrash} from 'react-icons/fa'
import {GiCompactDisc} from 'react-icons/gi'

class Note extends Component{
  constructor(props){
    super(props)
    this.state = {
      editing: false
    }
    this.edit = this.edit.bind(this)
    this.remove = this.remove.bind(this)
    this.save = this.save.bind(this)
    this.renderForm = this.renderForm.bind(this)
    this.renderDisplay = this.renderDisplay.bind(this)
  }

  edit(){
    this.setState({
      editing:true
    })
  }

  remove(){
    alert("removing")
  }

  save(){
    alert("saved")
  }

  renderForm(){
    return(
      <div className="note">
        <form>
          <textarea />
          <button onClick={this.save}><GiCompactDisc /></button>
        </form>
      </div>
    )
  }

  renderDisplay(){
    return(
      <div className="note">
        <p>Learn React</p>
        <span>
          <button onClick={this.edit} id="edit"><FaPencilAlt /></button>
          <button onClick={this.remove} id="remove"><FaTrash /></button>
        </span>
      </div>
    )
  }

  render(){
    return this.state.editing ? this.renderForm() : this.renderDisplay()
  }
}

export default Note
