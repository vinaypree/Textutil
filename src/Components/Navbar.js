import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {link} from 'react-router-dom';


export default function Navbar(props) {
//   const [state, setState] = useState(`dark`)
//   const handleChanges = (e)=>{
//  if( props.mode === 'dark')
//   {
//     setState('light')
//   }
//   else{
//     setState('light')
//   }
// } mera idea tha chl aaaa nhi 
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-a active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutText}</a>
        </li>
       
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' :'dark'}`}>
  <input className="form-check-input"onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode === 'dark' ? 'light' :'dark'} Mode`} </label>
</div> 
    </div>
  </div>
</nav>

  )
}
// props are basically properties which we want them to vary and we could change them
//props are content of component 
//using props we change content update content refer documentation
//those changes are the state of those content which we sent by props
//using props we update content state
Navbar.propTypes = {title:PropTypes.string,
                    aboutText:PropTypes.string
                  }

Navbar.defaultProps = {title:'Set title here',
                        aboutText:'set about here'}