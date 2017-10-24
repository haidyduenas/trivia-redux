import React, {Component} from 'react';
import { connect } from "redux-zero/react";
import {again , compare,saveData} from "./actions";
import {store} from './store'
import './App.css';

const TriviaApp = ({ store}) => {

   return (
    <div>
    <header>
    <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 img-question">
           <img className="img-responsive img-questions" src={images}/>
        </div>
    </div>
    </header>
    <div className="row content ">
        <div className="progress-container col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-left pogress-label">
                <p>{index} pregunta(s) de 5</p>
            </div>
            <div className= "progress">
                <div className="progress-bar"  >
                    <span className="sr-only">100%</span>
                </div>
            </div>  
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          {questions}
        </div>                
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 btn-social">
            <ul className="social-network social-circle">
                <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
            </ul>               
        </div>
    </div>
</div>);
}

 const mapToProps = ({TriviaApp, saveData}) => ({TriviaApp, saveData});
 
 export default connect(mapToProps)(App);