import React from 'react';
import axios from 'axios'
import Action from './Components/Action'
import Projects from './Components/Projects'
import {Route} from 'react-router-dom'
import './App.css';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      projects:[],
      clickedProject:null,
      actions:null
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3200/api/projects')
    .then(res => {
      console.log(res)
      this.setState({
        projects:res.data
      })
    })
    .catch(err =>
      console.log(err))
  }

  handleItem=(project) => {
    axios.get(`http://localhost:3200/api/projects/${project.id}/actions`)
    .then(res => {
      console.log(res)
      this.setState({
        actions:res.data,
        clickedProject:project
      })
      this.props.history.push(`/${this.state.clickedProject.id}/actions`)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render(){
  return (
    <div className="App">
      <h1>React App for Projects</h1>
      <Route exact path='/'
      render={props => (
        <Projects {...props}
        projects={this.state.projects}
        handleItem={this.handleItem} /> 
      )}/>

      <Route path='/:id/actions'
      render={props => (
        <Action {...props}
        clickedProject={this.state.clickedProject}
        actions={this.state.actions}
        />
      )}/>
    </div>
  );
}
}

export default App;
