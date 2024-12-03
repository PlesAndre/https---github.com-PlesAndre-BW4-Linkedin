import React from "react";

//style import
import "./Footer.css";

//Bootstrap imports
import { Container } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container>
      <footer className="m-3">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Informazioni
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Informativa sulla community professionale
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Privacy e condizioni
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Sales Solutions
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Centro sicurezza
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Accessibilità
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Carriera
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Opzioni per gli annunci pubblicitari
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Mobile
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Talent Solutions
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                Soluzioni di marketing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Pubblicità
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                Piccole imprese
                </a>
              </li>
                </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <p>Seleziona lingua</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="language" className="visually-hidden">
                  Italiano
                </label>
                <input
                  id="language"
                  type="text"
                  className="form-control"
                  placeholder="Italiano"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>LinkedIn Corporation © 2024</p>
        </div>
      </footer>
    </Container>
  );
};

export default MyFooter;
