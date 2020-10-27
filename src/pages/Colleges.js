import React, { Component } from 'react'
import CollegeModel from '../models/CollegeModel'

// import { Link } from 'react-router-dom'


class Colleges extends Component {
  state = {
    colleges: []
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    CollegeModel.all().then(data => {
      this.setState({ colleges: data.colleges })
    })
  }

  render() {
    return (
      <div>
        <h1>All Colleges</h1>
      </div>
    );
  }
}

export default Colleges;