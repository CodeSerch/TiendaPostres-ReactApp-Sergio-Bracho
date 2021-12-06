
import React, { Component, setState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";



class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    signUpForm = () => {
        console.log("siging up xd");
        let signupForm = document.getElementById("signup-form");
        signupForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            const modal = document.getElementById("modal-signup");

            try {
                console.log("trying");
                const { email, password } = getSignupFormInfo();
                console.log("email:" + email + "password:" + password);
            } catch (error) {
                console.log(error);
            }

        });
        function getSignupFormInfo() {
            const email = signupForm["signup-email"].value;
            const password = signupForm["signup-password"].value;

            return { email, password };
        }
    }


    render() {
        return (
            <div>
                <button onClick={() => { this.setState({ show: true }) }} class="button1">
                    Login
                </button>
                <Modal show={this.state.show} onHide={() => this.setState({ show: false })} id="modal-signup">
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Rellena los campos:
                        <form id="signup-form">
                            <div class="input-field">
                                <input type="email" id="signup-email" required />
                                <label for="signup-email">Correo Electronico</label>
                            </div>
                            <div class="input-field">
                                <input type="password" id="signup-password" required />
                                <label for="signup-password">Contraseña:</label>
                            </div>
                            <div class="input-field">
                                <input type="text" id="signup-bio" required />
                                <label for="signup-bio">Set a bio</label>
                            </div>
                            <Button variant="primary" type="submit" onClick={() => this.signUpForm()}>Sign up</Button>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setState({ show: false })}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => this.setState({ show: false })}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default SignUp