import React from "react";

const CheckoutStepB = (props: any) => {

  return (
    <>

      <div className="accordion-body">

        <form>
          <div className="row mt-4 mt-md-0">
            <div className="col-sm-6 mb-4">
              <label htmlFor="firstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="first_name"
                placeholder=""
                required
                onChange={props.handleChange}
                defaultValue={props?.addressFields.first_name}
              />

              <div className="invalid-feedback"></div>
            </div>
            <div className="col-sm-6  mb-4">
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder=""
                //defaultValue={""}
                required

                onChange={props.handleChange}

                name="last_name"
                defaultValue={props.addressFields.last_name}
              />
              <div className="invalid-feedback">

              </div>
            </div>
            <div className="col-12  mb-4">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="#45, Avenue Towers, Scalpel Road"
                required

                onChange={props.handleChange}
                name="line_1"
                defaultValue={props.addressFields.line_1}
              />
            </div>
            <div className="col-12  mb-4">
              <label htmlFor="address2" className="form-label">
                Apartment, Street, Landmark
                <span className="text-muted">(Optional)</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="address2"
                placeholder="80 Feet Road, Behind Hindu Temple"

                onChange={props.handleChange}
                name="line_2"
                required
                defaultValue={props.addressFields.line_2}
              />
            </div>
            <div className="col-sm-6  mb-4">
              <label htmlFor="lastName" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder=""
                //defaultValue={""}
                required
                onChange={props.handleChange}
                name="city"

                defaultValue={props.addressFields.city}
              />
            </div>
            <div className="col-md-3 ">
              <label htmlFor="zip" className="form-label">
                Postal Code
              </label>
              <input
                type="text"
                className="form-control"
                id="Postal Code"
                placeholder=""
                required

                onChange={props.handleChange}
                name="postcode"
                defaultValue={props.addressFields.postcode}
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="zip" className="form-label">
              Address Type
            </label>
            <div className="d-flex">
              <div className="form-check mt-4">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  defaultChecked
                  required
                />
                <label
                  className="form-check-label ms-2 me-4"
                  htmlFor="credit"
                >
                  Home (9am - 10pm)
                </label>
              </div>
              <div className="form-check  mt-4">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required
                />
                <label
                  className="form-check-label ms-2 me-4"
                  htmlFor="debit"
                >
                  Office (9am - 5pm)
                </label>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button
              className="btn  btn-lg fs-16"
              type="button"
              onClick={props.checkout}
            >
              Save &amp; Deliver Here
            </button>

            <button
              className="btn  btn-lg fs-16 m-2"
              type="button"

              onClick={props.paymentMethod}
            >
              Next
            </button>
          </div>
          <div className="seprtor">
            <span>or</span>
          </div>
          <div className="mt-5">
            <div className="form-check  mt-4">
              <input
                id="delivery"
                name="delivery"
                type="radio"
                className="form-check-input"

              />
              <label
                className="form-check-label ms-2 me-4"
                htmlFor="delivery"
              >
                In-store delivery
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default CheckoutStepB;