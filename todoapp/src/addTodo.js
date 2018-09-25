import React, {Component} from 'react';

class addTodo extends Component {
  state  = {
    todo: [
      { do: null, id: null }
    ]
  }
  handleChange = (e) => {
   this.setState({
      do : e.target.value
  })
  }
  handleSubmit = (sub) => {
   sub.preventDefault();
   this.props.addTodo(this.state);
   this.setState({
    do: ''
    })
  }
  render(){
     return (
           <form className ="addTodo" onSubmit= {this.handleSubmit}>
             <div className="input-field">
               <i className="material-icons prefix">mode_edit</i>
               <input  type= 'text' onChange={this.handleChange} className ="Input"  name='do' placeholder='What you want to do ?'></input>
               <button className="btn waves-effect waves-light" type="submit" name="action">Add
                 <i className="material-icons right">send</i>
               </button>
             </div>
           </form>
         )
       }
     }


export default addTodo;
