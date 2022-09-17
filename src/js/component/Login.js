import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import { Card, Alert, Form, Button } from "react-bootstrap";
import { getDatabase, ref, get, child } from "firebase/database";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signIn } = UserAuth();
    const history = useHistory();
   
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
        await signIn(email, password);
        history.push("/Account");
      } catch (e) {
        setError(e.message);
        console.log(e.message);
      }
    }  
  return (
    <>
    <div className="w-full h-screen">
        <Card className="position-relative">
          <img
            className="img-fluid img-thumbnail"
            src="https://getwallpapers.com/wallpaper/full/d/d/b/374333.jpg"
          />
          <Card.Body
            border="white"
            style={{ width: "25rem" }}
            className="bg-dark opacity-75 border border-2 position-absolute top-50 start-50 translate-middle"
          >
            <h2 className="text-center mb-4">Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="form-signin w-100 m-auto">
              <div>
                <h1 className="h3 mb-3 fw-normal">Account</h1>
                <p className="mt-5 mb-3 text-muted">
                  If you dont have a account{" "}
                  <Link to="/Signup" className="underline">
                    SignUp
                  </Link>
                </p>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-3"
                  controlId="formBasicEmail"
                >
                  <Form.Label></Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>

                <Form.Group
                  onChange={(e) => setPassword(e.target.value)}
                  className="mb-3"
                  controlId="formBasicPassword"
                >
                  <Form.Label></Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check className="text-muted" type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="outline-primary" type="submit">
                 Login
                </Button>
                <div className=" have-account w-100 text-center mt-2">
                  Don't have an account?{" "}
                  <Link className="signup" to="/Signup">
                   SignUp
                  </Link>
                </div>
              </Form>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Login
