/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import Section from "../Section";
import classes from "./Payment.module.scss";
function Payment() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  const currentYear = new Date().getFullYear();
  let countryOptions = [],
    cityOptions = [];
  useEffect(() => {
    setIsLoading(true);
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setLoadedMeetups(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return (
      <Section mainColor="white" menuId="menu_payment1" height="180">
        <h1>Loading...</h1>
      </Section>
    );
  }
  loadedMeetups.forEach((country, i) => {
    countryOptions.push(
      <option value={country.name} key={i}>
        {country.name}
      </option>
    );
    cityOptions.push(<option value={country.capital} key={i}></option>);
  });
  return (
    <Section mainColor="white" menuId="menu_payment1" height="180">
      <div className={classes.payment}>
        <h1 className={classes["payment__title"]}>Payment</h1>
        <form
          className={classes["payment__form"]}
          action="https://formspree.io/f/xzbyybye"
          method="POST"
        >
          <div>
            <h2>1. Select your plan</h2>
            <div className={classes["payment__form__radio"]}>
              <div className={classes["payment__form__radio__basic"]}>
                <input type="radio" name="plan" id="basic" value="basic" />
                <label htmlFor="basic">
                  <span
                    className={classes["payment__form__radio__button"]}
                  ></span>
                  BASIC
                </label>
              </div>
              <div className={classes["payment__form__radio__advanced"]}>
                <input
                  type="radio"
                  name="plan"
                  id="advanced"
                  value="advanced"
                  defaultChecked
                />
                <label htmlFor="advanced">
                  <span
                    className={classes["payment__form__radio__button"]}
                  ></span>
                  ADVANCED
                </label>
              </div>
              <div className={classes["payment__form__radio__pro"]}>
                <input type="radio" name="plan" id="pro" value="pro" />
                <label htmlFor="pro">
                  <span
                    className={classes["payment__form__radio__button"]}
                  ></span>
                  PRO
                </label>
              </div>
            </div>
          </div>
          <div className={classes["payment__form__bottom"]}>
            <div className={classes["payment__form__bottom__billing"]}>
              <h2>2. Billing Information</h2>
              <div className={classes["payment__form__bottom__itemBox"]}>
                <div>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="address">Billing Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    autoComplete="address"
                    autoFocus
                    required
                  />
                </div>
                <div className={classes["payment__form__bottom__twoItem"]}>
                  <div>
                    <label htmlFor="city">City</label>
                    <input list="cities" id="city" required />
                    <datalist id="cities">{[...cityOptions]}</datalist>
                  </div>
                  <div>
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      pattern="[A-Za-z][0-9][A-Za-z][ ]?[0-9][A-Za-z][0-9]"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="country">Country</label>
                  <select id="country" name="country" required>
                    <option value=""></option>
                    {[...countryOptions]}
                  </select>
                </div>
              </div>
            </div>
            <div className={classes["payment__form__bottom__creditCard"]}>
              <h2>3. Credit Card Information</h2>
              <div className={classes["payment__form__bottom__itemBox"]}>
                <div>
                  <label htmlFor="cardholder">Cardholder's Name</label>
                  <input
                    type="text"
                    id="cardholder"
                    name="cardholder"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cardNum">Card Number</label>
                  <input
                    type="tel"
                    id="cardNum"
                    name="cardNum"
                    inputMode="numeric"
                    pattern="[0-9\s]{13,19}"
                    autoComplete="cc-number"
                    maxLength="19"
                    required
                  />
                </div>
                <div className={classes["payment__form__bottom__twoItem"]}>
                  <div>
                    <label htmlFor="expireMonth">Expire Month</label>
                    <select id="expireMonth" name="expireMonth" required>
                      <option value=""></option>
                      {[...Array(12)].map((_, i) => (
                        <option value={i + 1} key={i}>
                          {`${i + 1}`.padStart(2, 0)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="expireYear">Expire Year</label>
                    <select id="expireYear" name="expireYear" required>
                      <option value=""></option>
                      {[...Array(10)].map((_, i) => (
                        <option value={i + currentYear} key={i}>
                          {i + currentYear}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="cardCVV">CVV</label>
                  <input
                    type="tel"
                    id="cardCVV"
                    name="cardCVV"
                    inputMode="numeric"
                    pattern="[0-9]{3}"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <input className={classes["submit"]} type="submit" value="Submit" />
        </form>
        <div className={classes["serviceTerm"]}>
          <small>
            By continuing, I acknowledge that I’ve read and agree to the Terms
            of
            <a href="#"> Service</a> &#38; <a href="#">Privacy Policy</a>.
          </small>
          <button
            className="btn btn-color"
            content="DOWNLOAD"
            style={{ transform: "scale(0.8)" }}
          >
            DOWNLOAD
          </button>
        </div>
      </div>
    </Section>
  );
}
export default Payment;
