import React ,{useState}from 'react'

function Alert(props) {
  return (
    
       props.alert && <div class={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.typ}</strong> :{props.alert.msg}  
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

    //if props.alert is not null then we get our html code work 
    //else it will be skiped
  )
}

export default Alert