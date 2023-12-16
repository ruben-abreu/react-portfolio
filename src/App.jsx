import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from 'react-scroll';
class App extends React.Component {
  componentDidMount() {
    scrollSpy.update();
    Events.scrollEvent.register('begin', function () {});
    Events.scrollEvent.register('end', function () {});
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  scrollToSection = sectionName => {
    scroll.scrollTo(sectionName, {
      duration: 500,
      smooth: true,
    });
    console.log(`Scrolling to section: ${sectionName}`);
  };

  render() {
    return (
      <div>
        <Navbar scrollToSection={this.scrollToSection} />
        <Element name='home' className='element'>
          <Home />
        </Element>
        <Element name='about' className='element'>
          <About />
        </Element>
        <Element name='projects' className='element'>
          <Projects />
        </Element>
        <Element name='skills' className='element'>
          <Skills />
        </Element>
        <Element name='contact' className='element'>
          {/*   <Contact Me /> */}
        </Element>
      </div>
    );
  }
}

export default App;
