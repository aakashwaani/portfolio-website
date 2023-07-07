// import  'bootstrap/dist/css/bootstrap.css';
import avatar from './assets/img/my-avatar.png'
import Skills from './components/skills'
import Socials from './components/socials'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (

    <div className="container">
     <Socials/>
      <div className="hero">
        <img className="gif" src={avatar} alt="" />
      </div>
      <div className="introtext">
        <h3>Hey! I &apos;m Akash. I&apos;m a Frontend dev based out of <span>Latur Maharashtra, India.</span></h3>
        <p>
          I&apos;m a Front-end focused developer. I build & break stuff 🔨, write code 👨‍💻, design things 🌈.
        </p>
        <p>
          I mostly work in React ⚛️  and love to build cool stuff with it. Currently I &apos;m working on  
          <div className="repos">
            <a href="" className="repo-link">Personal Website </a>(a hyper minimalistic portfolio website).
          </div>
        </p>
      </div>
      <Skills/>
     <Footer/>
    </div>

  )
}

export default App
