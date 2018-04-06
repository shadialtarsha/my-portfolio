import React from 'react';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';
import 'react-typist/dist/standalone/Typist.js';

const HomePage = () => (
  <main id="home">
    <div>
      <p>
        <span className="code__const">const</span> developer <span className="code__operator">=</span> {'{'}
      </p>
      <p>
        &nbsp; &nbsp; firstName: <span className="code__value">'Shadi'</span>,
      </p>
      <p>
        &nbsp; &nbsp; lastName: <span className="code__value">'Al-Tarsha'</span>,
      </p>
      <p>
        &nbsp; &nbsp; skills:{' '}
        <span className="code__value">
          ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'Redux', 'NodeJS', 'ExpressJs', 'MongoDB', 'Unit Testing', 'Java',
          'Android', 'SQL', 'RESTful API']
        </span>,
      </p>
      <p>
        &nbsp; &nbsp; email: <span className="code__value">'shadi.altarsha.94@gmail.com'</span>,
      </p>
      <p> &nbsp; &nbsp; address: {'{'}</p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; country: <span className="code__value">'Syria'</span>,
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; city: <span className="code__value">'Homs'</span>
      </p>
      <p> &nbsp; &nbsp; },</p>
      <p>
        &nbsp; &nbsp; avatar: <span className="code__value">'/images/avatar.jpg'</span>,
      </p>
      <p>
        &nbsp; &nbsp; favoriteLanguage: <span className="code__value">['JavaScript', 'Java']</span>,
      </p>
      <p>
        &nbsp; &nbsp; bio:
        <span className="code__value">
          'Graduated as a Software Engineer. Ambitious, self-motivated, team worker, and a big believer in self-taught
          approach.',
        </span>
      </p>
      <p> &nbsp; &nbsp; socialMedia: {'{'}</p>
      <p>
        &nbsp; &nbsp;&nbsp; &nbsp; facebook:{' '}
        <span className="code__value code__value--url">'https://www.facebook.com/shadi.altarsha'</span>,
      </p>
      <p>
        &nbsp; &nbsp;&nbsp; &nbsp; github:{' '}
        <span className="code__value code__value--url">'https://github.com/shadialtarsha'</span>,
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;twitter:{' '}
        <span className="code__value code__value--url">'https://twitter.com/shadi_altarsha'</span>
      </p>
      <p> &nbsp; &nbsp;}</p>
      <p>};</p>
      <br />
      <Typist
        avgTypingDelay={40}
        startDelay={1000}
        cursor={{
          show: false,
          blink: false,
          element: '|',
          hideWhenDone: true,
          hideWhenDoneDelay: 0,
        }}
      >
        <div>
          <p>
            <span className="code__object">console</span>.<span className="code__function">log</span>(
            <span className="code__value">
              `Hello, my name is <span className="code__string-interpolation">{'${'}</span>
              <span className="code__object">developer</span>
              <span className="code__attribute-name">.firstName</span>
              <span className="code__string-interpolation">{'}'}</span>
              &nbsp;
              <span className="code__string-interpolation">{'${'}</span>
              <span className="code__object">developer</span>
              <span className="code__attribute-name">.lastName</span>
              <span className="code__string-interpolation">{'}'}</span>
              `
            </span>);
          </p>
          <p>
            <span className="code__object">console</span>.<span className="code__function">log</span>
            (<span className="code__value">
              `<span className="code__string-interpolation">{'${'}</span>
              <span className="code__object">developer</span>
              <span className="code__attribute-name">.bio</span>
              <span className="code__string-interpolation">{'}'}</span>
              `
            </span>);
          </p>
          <p>
            <span className="code__object">console</span>.<span className="code__function">log</span>
            (<span className="code__value">
              `My favorite programming language is <span className="code__string-interpolation">{'${'}</span>
              <span className="code__object">developer</span>
              <span className="code__attribute-name">.favoriteLanguages[</span>
              <span className="code__string-interpolation">0</span>
              <span className="code__attribute-name">]</span>
              <span className="code__string-interpolation">{'}'}</span>.`
            </span>);
          </p>
          <p>
            <span className="code__object">console</span>.<span className="code__function">log</span>
            (<span className="code__value">
              `but <span className="code__string-interpolation">{'${'}</span>
              <span className="code__object">developer</span>
              <span className="code__attribute-name">.favoriteLanguages[</span>
              <span className="code__string-interpolation">1</span>
              <span className="code__attribute-name">]</span>
              <span className="code__string-interpolation">{'}'}</span> was the reason why I started loving
              programming.`
            </span>
            );
          </p>
          <p>
            <span className="code__object">console</span>.<span className="code__function">log</span>
            (<span className="code__value">
              `I live in <span className="code__string-interpolation">{'${'}</span>
              <span className="code__object">developer</span>
              <span className="code__attribute-name">.address.country</span>
              <span className="code__string-interpolation">{'}'}</span> -{' '}
              <span className="code__string-interpolation">{'${'}</span>
              <span className="code__object">developer</span>
              <span className="code__attribute-name">.address.city</span>
              <span className="code__string-interpolation">{'}'}</span>.`
            </span>
            );
          </p>
          <p>
            <span className="code__object">console</span>.<span className="code__function">log</span>
            (<span className="code__value">'My skills are: '</span>);
          </p>
          <p>
            <span className="code__operator">for</span>(
            <span className="code__const">const</span> i
            <span className="code__operator"> = </span>
            <span className="code__string-interpolation">0</span>
            ; i
            <span className="code__operator"> {'<'} </span>
            <span className="code__object">developer</span>.skills.
            <span className="code__const">length</span>
            ; i<span className="code__operator">++</span>
            ) {'{'}
            <span style={{ display: 'block' }} />
            &nbsp; &nbsp;<span className="code__object">console</span>.<span className="code__function">log</span>(
            <span className="code__object">developer</span>.skills[
            <span className="code__string-interpolation">i</span>]);
            <span style={{ display: 'block' }} />
            {'}'}
          </p>
          <p>
            <span className="code__object">console</span>.<span className="code__function">log</span>
            (<span className="code__value">
              `If you want to make something exsiting together, feel free to email me at
              <span className="code__string-interpolation"> {'${'}</span>
              <span className="code__object">developer</span>
              <span className="code__attribute-name">.email</span>
              <span className="code__string-interpolation">{'}'}</span>
              `
            </span>);
          </p>
          <p>
            <span className="code__object">console</span>.<span className="code__function">log</span>
            (<span className="code__value">'Btw I am a Barcelona fan.'</span>);
          </p>
        </div>
      </Typist>
    </div>
    <Typist
      avgTypingDelay={50}
      startDelay={34000}
      cursor={{
        show: false,
        blink: false,
        element: '|',
        hideWhenDone: true,
        hideWhenDoneDelay: 0,
      }}
    >
      <div>
        <Link to="/about">
          <button>You know what, let's run the website. I think I went to far.</button>
        </Link>
      </div>
    </Typist>
  </main>
);

export default HomePage;
