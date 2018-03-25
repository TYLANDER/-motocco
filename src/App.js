import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav';
import Background from './images/dunes.jpg';

var headerStyle = {
  width: "100%",
  backgroundImage: `url(${Background})`,
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <article class="helvetica pb5">
          <header style={ headerStyle } class="vh-100 bg-light-pink dt w-100 cover no-repeat">
            <div
              class="dtc v-mid cover ph3 ph4-m ph5-l">
              <h1 class="f2 f-subheadline-l measure lh-title fw9">Look at these bois adventuring on their motorcycles</h1>
              <h2 class="f6 fw6 black">A Moroccan Journey</h2>
            </div>
          </header>
          <div class="serif ph3 ph4-m ph5-l">
            <p class="lh-copy f5 f3-m f1-l measure center pv4">
              <time>March 25, 2018</time>, Marrakech - a journey across Morocco. </p>
            <div class="f5 f3-m lh-copy">
              <div class="cf dt-l w-100 bt b--black-10 pv4">
                <div class="dtc-l v-mid mw6 pr3-l">
                  <img src={require('./images/natecover.jpg')} class="w-100 mw7 w6-ns o-85" alt="smileyface"/>
                </div>
                <div class="dtc-l v-mid f6 f5-m f4-l measure-l">
                  <p class="measure pv4-l center">
                    <span class="fw9 fw4-ns">
                      This one time we went to Morocco to ride motorcyles. What suprised us the most was the diversity of this dramatic terrain.
                      In one small country there is desert, mountains, and beaches reminiscent of California, where most of these bois manage their moisture.
                      There are many ways to view the land of Arabs, Berbers, and countless millenia of human habitation.
                      </span>
                  </p>
                </div>
              </div>
              <div class="cf dn">
                <div class="fl w-100 w-50-l">
                  <p class="f5 pv4">
                    During high tides, water would flow directly into the pools from the
                    nearby ocean, recycling the <span class="db f4 f3-m f1-l fw6 measure lh-title">two million US gallons of water in about an hour. </span>
                  </p>
                </div>
                <div class="fl w-100 w-50-l">
                  <p class="f5">
                    During low tides, a powerful turbine water pump,
                    built inside a cave at sea level, could be switched on from a control
                    room and could fill the tanks at a rate of 6,000 US gallons a minute,
                    recycling all the water in five hours.
                  </p>
                </div>
              </div>
              <div class="cf">
                <div class="fl w-100 w-50-l pr2-l pb3">
                <img src={require('./images/squadgorgesdades.jpg')} class="w-100 mw7 w6-ns o-85" alt="squad on the gorges"/>
                </div>
                <div class="fl w-50 w-50-l pr1 pr0-l pl2-l pb3">
                <img src={require('./images/motos-atlas-pass.jpg')} class="w-100 mw7 w6-ns o-85" alt="motos crossing the atlas mtns"/>
                </div>
                <div class="fl w-50 w-50-l pl2 pl0-l pr2-l pb3">
                <img src={require('./images/dunes.jpg')} class="w-100 mw7 w6-ns o-85" alt="dunes"/>
                </div>
                <div class="fl w-100 w-50-l pl2-l">
                <img src={require('./images/brendan-allen-road.jpg')} class="w-100 mw7 w6-ns o-85" alt="brendan and allen on the road"/>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="cf ph3 ph5-ns pv5">
          <header class="fn fl-ns w-50-ns pr4-ns">
            <h1 class="mb3 mt0 lh-title">Clay in a Potters Hand</h1>
            <time class="f6 ttu tracked gray">Jan Tschichold</time>
          </header>
          <div class="fn fl-ns w-50-ns">
            <p class="lh-copy measure mt4 mt0-ns">
              PERFECT typography is more a science than an art. Mastery of the trade is
              indispensable, but it isnt everything. Unerring taste, the hallmark of
              perfection, rests also upon a clear understanding of the laws of harmonious
              design. As a rule, impeccable taste springs partly from inborn sensitivity:
              from feeling. But feelings remain rather unproductive unless they can inspire a
              secure judgment. Feelings have to mature into knowledge about the consequences
              of formal decisions. For this reason, there are no born masters of typography,
              but self- education may lead in time to mastery.
            </p>
            <p class="lh-copy measure">
              It is wrong to say that there is no arguing about taste when it is good taste
              that is in question. We are not born with good taste, nor do we come into this
              world equipped with a real understanding of art. Merely to recognize who or
              what is represented in a picture has little to do with a real under- standing
              of art. Neither has an uninformed opinion about the proportions of Roman
              letters. In any case, arguing is senseless. He who wants to convince has to
              do a better job than others.
            </p>
          </div>
        </article>
      </div>
    );
  }
}

export default App;
