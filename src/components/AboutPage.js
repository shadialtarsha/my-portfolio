import React from 'react';
import Typing, { Cursor } from 'react-typing-animation';

// import Header from './Header';
// import SocialMedia from './SocialMedia';

// const developer = {
//   firstName: 'Shadi',
//   lastName: 'Al-Tarsha',
//   email: 'shadi.altarsha.94@gmail.com',
//   address: {
//     country: 'Syria',
//     city: 'Homs',
//   },
//   avatar: '/images/avatar.jpg',
//   favoriteLanguages: ['JavaScript', 'Java'],
//   socialMedia: {
//     facebook: 'https://www.facebook.com/shadi.altarsha',
//     github: 'https://github.com/shadialtarsha',
//     twitter: 'https://twitter.com/shadi_altarsha',
//   },
//   bio: `Graduated from Al-Baath University Computer Sience department. Ambitious, self-motivated, team worker, and a big believer in
//         self-taught approach.`,
// };

// console.log(`Hello, my name is ${developer.firstName} ${developer.lastName}`);

const AboutPage = () => (
  <Typing speed={10} cursor={<Cursor className="cursor" />}>
    <div className="code">
      <p>
        <span className="code__const">const</span> developer <span className="code__equal">=</span> {'{'}
      </p>
      <p>
        &nbsp; &nbsp; firstName: <span className="code__value">'Shadi'</span>,
      </p>
      <p>
        &nbsp; &nbsp; lastName: <span className="code__value">'Al-Tarsha'</span>,
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
        &nbsp; &nbsp;avatar: <span className="code__value">'/images/avatar.jpg'</span>,
      </p>
      <p>
        &nbsp; &nbsp;favoriteLanguage: <span className="code__value">['JavaScript', 'Java']</span>,
      </p>
      <p> &nbsp; &nbsp;socialMedia: {'{'}</p>
      <p>
        &nbsp; &nbsp; facebook: <span className="code__value--url">'https://www.facebook.com/shadi.altarsha'</span>,
      </p>
      <p>
        &nbsp; &nbsp; github: <span className="code__value--url">'https://github.com/shadialtarsha'</span>,
      </p>
      <p>
        &nbsp; &nbsp; twitter: <span className="code__value--url">'https://twitter.com/shadi_altarsha'</span>
      </p>
      <p> &nbsp; &nbsp;},</p>
      <p>
        &nbsp; &nbsp;bio:
        <span className="code__value">
          'Graduated as Software Engineer. Ambitious, self-motivated, team worker, and a big believer in self-taught
          approach.'
        </span>
      </p>
      <p>};</p>
      <p>
        <span className="code__object">console</span>.<span className="code__function">log</span>(
        <span className="code__value">
          `Hello, my name is <span className="code__string-interpolation">{'${'}</span>developer.firstName
          <span className="code__string-interpolation">{'}'}</span>
          &nbsp;
          <span className="code__string-interpolation">{'${'}</span>
          developer.lastName
          <span className="code__string-interpolation">{'}'}</span>
        </span>
        `);
      </p>
    </div>
  </Typing>
);

export default AboutPage;
