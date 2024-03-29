import React, { Component } from 'react'
import Intro from './Intro'
import { api } from '../utils/api'
import TurnMeOn from '../components/TurnMeOn'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Counter from '../components/Counter'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class MainComponent extends Component {
  async confirmEmail(){
    const code = window.location.pathname.replace("/","");

    if(code && code !== '' && code !== '/'){
      api.post('/confirm', {code}).then( res => {
        toast.success('💡 You turned your light successfully on!')
      }).catch(err => {
        toast.error(err.response.data.message)
      });
    }
  }

  componentDidMount(){
    this.confirmEmail()
  }

  render() {
    return (
      <div className="MainComponent">
        <Header/>
        <Counter/>
        <Intro/>
        <TurnMeOn/>
        <Footer/>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </div>
    )
  }
}
