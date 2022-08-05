import { React, useState }from "react"
import {Form, Button} from "react-bootstrap"


const Login = () => {
  
  const [loggedIn, setLoggedIn] = useState(false)
  
  const handleLoginClick = () => {
    console.log("ive been clicked sucka")
    setLoggedIn(!loggedIn);
  }

  return(
      <div className="login-form">
        { loggedIn ? 
          <div>Jon is a flacid man child</div> :
          <Form className="form-width">
            <Form.Group>
              <Form.Control type="text" placeholder="Name" name="name"/>  
              <Form.Control type="password" placeholder="Password" name="password"/>
              <br></br>
             
            </Form.Group>
          </Form>
        }
         <Button onClick={() => handleLoginClick()}>Login</Button>
      </div>
  )
}

export default Login