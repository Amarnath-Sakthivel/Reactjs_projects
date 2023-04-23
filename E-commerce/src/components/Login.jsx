import React, { useState } from "react";

const Login = ({ isLoggedInUser }) => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUserName = (event) =>{
        setUserName(event.target.value);
    }
    const handleChangePassword = (event) =>{
        setPassword(event.target.value);
    }

  return (
    <div>
      <section class="h-100 gradient-form">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">
                      <div class="text-center">
                        {/* <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                         width={185}
                          alt="logo"
                        /> */}
                        <h4 class="mt-1 mb-5 pb-1">Welcome to E-commerce</h4>
                      </div>

                      <form>
                        <p>Please login to your account</p>

                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            class="form-control"
                            placeholder="Phone number or email address"
                            onChange={handleChangeUserName}
                            value={username}
                          />
                          <label class="form-label" for="form2Example11">
                            Username
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            class="form-control"
                            onChange={handleChangePassword}
                            value={password}
                          />
                          <label class="form-label" for="form2Example22">
                            Password
                          </label>
                        </div>

                        <div class="text-center pt-1 me-1 mb-5 pb-1">
                          <button
                            class="btn btn-outline-primary btn-block  mb-3"
                            type="button" onClick={() => isLoggedInUser(username, password)}
                          >
                            Log in
                          </button>{" "}
                          <br />
                          <a class="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>

                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Don't have an account?</p>
                          <button type="button" class="btn btn-outline-primary">
                            Create new
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-6 d-flex align-items-top gradient-custom-2">
                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 class="mb-4">Get start your favorite shopping</h4>
                      <p class="small mb-0">
                        Digital is really two things. It refers to a set of
                        technologies, everything from artificial intelligence to
                        the use of e-commerce. But digital is really about a
                        different way of working, of making decisions, of
                        partnering and reaching your clients, and so it's also
                        about how you do things.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
