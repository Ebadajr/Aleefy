import React, { useState, useEffect } from "react";
import "../styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import caro1 from "../img/blog-1.jpg";
import userService from "../services/user.service";

function Adoption() {
  const [bookings, setBookings] = useState([]);

  const adopt = (id) => {
    userService
      .adoptPet(id)
      .then(() => {
        alert("Request sent");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const style4 = {
    height: "36px",
    width: "36px",
  };
  const style5 = {
    background: "#111111",
  };
  const font = {
    "font-size": "24px",
  };

  useEffect(() => {
    async function fetchBookings() {
      try {
        // Call the backend function listBookings here
        const response = await fetch("http://localhost:7000/allpets");
        const data = await response.json();

        setBookings(data); // Assuming data is an array of booking objects
      } catch (error) {
        console.error("Error fetching bookings:", error);
        // Handle error here
      }
    }

    fetchBookings();
  }, []);

  return (
    <div>
      <meta charset="utf-8" />
      <title>Rafeeky</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="Free HTML Templates" name="keywords" />
      <meta content="Free HTML Templates" name="description" />

      <link href="img/favicon.ico" rel="icon" />

      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans&family=Nunito:wght@600;700;800&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        rel="stylesheet"
      />

      <link href="lib/flaticon/font/flaticon.css" rel="stylesheet" />

      <link
        href="lib/owlcarousel/assets/owl.carousel.min.css"
        rel="stylesheet"
      />
      <link
        href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
        rel="stylesheet"
      />

      <link href="css/style.css" rel="stylesheet" />

      <body>
        <div class="container-fluid">
          <div class="row bg-secondary py-2 px-lg-5">
            <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
              <div class="d-inline-flex align-items-center">
                <a class="text-white pr-3" href="">
                  FAQs
                </a>
                <span class="text-white">|</span>
                <a class="text-white px-3" href="">
                  Help
                </a>
                <span class="text-white">|</span>
                <a class="text-white pl-3" href="">
                  Support
                </a>
              </div>
            </div>
            <div class="col-lg-6 text-center text-lg-right">
              <div class="d-inline-flex align-items-center">
                <a class="text-white px-3" href="">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="text-white px-3" href="">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="text-white px-3" href="">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a class="text-white px-3" href="">
                  <i class="fab fa-instagram"></i>
                </a>
                <a class="text-white pl-3" href="">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="row py-3 px-lg-5">
            <div class="col-lg-4">
              <a href="" class="navbar-brand d-none d-lg-block">
                <h1 class="m-0 display-5 text-capitalize">
                  <span class="text-primary">Rafeeky</span>
                </h1>
              </a>
            </div>
            <div class="col-lg-8 text-center text-lg-right">
              <div class="d-inline-flex align-items-center">
                <div class="d-inline-flex flex-column text-center pr-3 border-right">
                  <h6>Opening Hours</h6>
                  <p class="m-0">8.00AM - 9.00PM</p>
                </div>
                <div class="d-inline-flex flex-column text-center px-3 border-right">
                  <h6>Email Us</h6>
                  <p class="m-0">info@example.com</p>
                </div>
                <div class="d-inline-flex flex-column text-center pl-3">
                  <h6>Call Us</h6>
                  <p class="m-0">+012 345 6789</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid p-0">
          <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
            <a href="" class="navbar-brand d-block d-lg-none">
              <h1 class="m-0 display-5 text-capitalize font-italic text-white">
                <span class="text-primary">Rafeeky</span>
              </h1>
            </a>
            <button
              type="button"
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-between px-3"
              id="navbarCollapse"
            >
              <div class="navbar-nav mr-auto py-0">
                <a href="/home" class="nav-item nav-link  ">
                  Home
                </a>
                <a href="/about" class="nav-item nav-link">
                  About
                </a>
                <a href="/service" class="nav-item nav-link">
                  Service
                </a>
                <a href="/cart" class="nav-item nav-link">
                  products
                </a>
                <a href="/clinic" class="nav-item nav-link">
                  Clinics
                </a>
                <a href="/contact" class="nav-item nav-link  ">
                  Contact
                </a>
                <a href="/adoption" class="nav-item nav-link active ">
                  Adoption
                </a>
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    More
                  </a>
                  <div class="dropdown-menu rounded-0 m-0">
                    <a
                      href="/myPets"
                      class="btn btn-lg btn-primary px-3 d-none d-lg-block"
                    >
                      my pets
                    </a>
                    <a
                      href="/blogs"
                      class="btn btn-lg btn-primary px-3 d-none d-lg-block"
                    >
                      blogs
                    </a>
                    <a
                      href="/events"
                      class="btn btn-lg btn-primary px-3 d-none d-lg-block"
                    >
                      Events
                    </a>
                    <a
                      href="/rescue"
                      class="btn btn-lg btn-primary px-3 d-none d-lg-block"
                    >
                      Rescue form
                    </a>
                    <a
                      href="/donate"
                      class="btn btn-lg btn-primary px-3 d-none d-lg-block"
                    >
                      Donation
                    </a>
                    <a
                      href="/"
                      class="btn btn-lg btn-primary px-3 d-none d-lg-block"
                    >
                      Logout
                    </a>
                  </div>
                </div>
              </div>
              <a href="/profile">
                <i class="fa-regular fa-user" style={font}></i>
              </a>
            </div>
          </nav>
        </div>

        <div class="container pt-5">
          <div class="d-flex flex-column text-center mb-5 pt-5">
            <h4 class="text-secondary mb-3">
              Browse now through our collection
            </h4>
            <h1 class="display-4 m-0">
              <span class="text-primary">Adoption</span>
            </h1>
          </div>

          <div class="row pb-3">
            <div class="row pb-3">
              {bookings.map((booking, index) => (
                <div class="col-lg-4 mb-4" key={index}>
                  <div class="card border-0 mb-2">
                    <img class="card-img-top" src={caro1} alt="" />
                    <div class="card-body">
                      <h5 class="card-title">{booking.name}</h5>
                      <p class="card-text">Breed: {booking.Breed}</p>
                      <p class="card-text">Age: {booking.age} years old</p>
                      <p class="card-text">
                        Description: {booking.description}
                      </p>
                      <button
                        className="btn btn-lg btn-primary mt-3 px-4"
                        onClick={() => adopt(booking._id)}
                      >
                        Accept
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div class="col-lg-12">
              <nav aria-label="Page navigation">
                <ul class="pagination justify-content-center mb-4">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo; Previous</span>
                    </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">Next &raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div class="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
          <div class="row pt-5">
            <div class="col-lg-4 col-md-12 mb-5">
              <h1 class="mb-3 display-5 text-capitalize text-white">
                <span class="text-primary">Rafeeky</span>
              </h1>
              <p class="m-0">
                Become a part of our growing community and experience the joy of
                connecting with fellow pet lovers from all walks of life.
                Together, let's create a safe, supportive, and inclusive
                environment where pets and their owners can thrive, flourish,
                and celebrate the unconditional love that binds us all.
              </p>
            </div>
            <div class="col-lg-8 col-md-12">
              <div class="row">
                <div class="col-md-4 mb-5">
                  <h5 class="text-primary mb-4">Get In Touch</h5>
                  <p>
                    <i class="fa fa-phone-alt mr-2"></i>+012 345 67890
                  </p>
                  <p>
                    <i class="fa fa-envelope mr-2"></i>info@example.com
                  </p>
                  <div class="d-flex justify-content-start mt-4">
                    <a
                      class="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                      style={style4}
                      href="#"
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                      style={style4}
                      href="#"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                      style={style4}
                      href="#"
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      class="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                      style={style4}
                      href="#"
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div class="col-md-4 mb-5">
                  <h5 class="text-primary mb-4">Popular Links</h5>
                  <div class="d-flex flex-column justify-content-start">
                    <a class="text-white mb-2" href="index.html">
                      <i class="fa fa-angle-right mr-2"></i>Home
                    </a>
                    <a class="text-white mb-2" href="about.html">
                      <i class="fa fa-angle-right mr-2"></i>About Us
                    </a>
                    <a class="text-white mb-2" href="service.html">
                      <i class="fa fa-angle-right mr-2"></i>Services
                    </a>
                    <a class="text-white mb-2" href="clinics.html">
                      <i class="fa fa-angle-right mr-2"></i>Clinics
                    </a>
                  </div>
                </div>
                <div class="col-md-4 mb-5">
                  <h5 class="text-primary mb-4">Newsletter</h5>
                  <form action="">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control border-0"
                        placeholder="Your Name"
                        required="required"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control border-0"
                        placeholder="Your Email"
                        required="required"
                      />
                    </div>
                    <div>
                      <button
                        class="btn btn-lg btn-primary btn-block border-0"
                        type="submit"
                      >
                        Submit Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="container-fluid text-white py-4 px-sm-3 px-md-5"
          style={style5}
        >
          <div class="row">
            <div class="col-md-6 text-center text-md-left mb-3 mb-md-0">
              <p class="m-0 text-white">
                &copy; <a class="text-white font-weight-bold">Rafeeky</a>. All
                Rights Reserved. Designed by
                <a class="text-white font-weight-bold">AAST</a>
              </p>
            </div>
            <div class="col-md-6 text-center text-md-right">
              <ul class="nav d-inline-flex">
                <li class="nav-item">
                  <a class="nav-link text-white py-0" href="#">
                    Privacy
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white py-0" href="#">
                    Terms
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white py-0" href="#">
                    FAQs
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white py-0" href="#">
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <a href="#" class="btn btn-lg btn-primary back-to-top">
          <i class="fa fa-angle-double-up"></i>
        </a>

        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="lib/tempusdominus/js/moment.min.js"></script>
        <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
        <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

        <script src="mail/jqBootstrapValidation.min.js"></script>
        <script src="mail/contact.js"></script>

        <script src="js/main.js"></script>
      </body>
    </div>
  );
}

export default Adoption;
