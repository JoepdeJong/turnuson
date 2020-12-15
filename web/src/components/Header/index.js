import React, { Component } from 'react'

import Kerstboom from '../../assets/img/kerstboom.png'

import { ReactComponent as LogoSvg } from '../../assets/img/logo.svg'

import './index.scss'

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header__image">
                    <img src={Kerstboom} alt="Kerstboom"/>
                </div>
                <div className="Header__text">
                    <LogoSvg/>
                </div>
            </div>
        )
    }
}
