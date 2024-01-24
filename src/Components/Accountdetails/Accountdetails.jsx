import React from "react";
import styles from "./Accountdetails.module.css";

export default function Accountdetails() {
  return <div>
    <div className="w-100">

      {/* form  */}
      <form>
        <div className="row">
          {/* first name */}
          <div className="col-md-9 mb-2 px-4">
            <div className="fName d-flex flex-column">
              <label htmlFor="fName" className="mb-2 ms-2">First Name *</label>
              <input type="text" name="fName" placeholder="First Name" className="py-2 px-3 mb-2" />
            </div>
          </div>

          {/* last name */}
          <div className="col-md-9 mb-2 px-4">
            <div className="lName d-flex flex-column">
              <label htmlFor="lName" className="mb-2 ms-2">Last Name *</label>
              <input type="text" name="lName" placeholder="Last Name" className="py-2 px-3 mb-2" />
            </div>
          </div>

          {/* email */}
          <div className="col-md-9 mt-2 px-4">
            <div className="email d-flex flex-column">
              <label htmlFor="email" className="mb-2 ms-2">Email *</label>
              <input type="email" name="email" placeholder="Email" className="py-2 px-3 mb-2" />
            </div>
          </div>

          {/* change password */}
          <p className="fs-6 fw-bold mt-4 mb-0 ms-2 ">Password Change</p>
          {/* old password */}
          <div className="col-md-9 mt-3 px-4">
            <div className="oldPassword d-flex flex-column">
              <label htmlFor="oldPassword" className="mb-2 ms-2">Old Password *</label>
              <input type="password" name="oldPassword" placeholder="Old Password" className="py-2 px-3 mb-2" />
            </div>
          </div>

          {/* new password */}
          <div className="col-md-9 mt-3 px-4">
            <div className="newPassword d-flex flex-column">
              <label htmlFor="newPassword" className="mb-2 ms-2">New Password *</label>
              <input type="password" name="newPassword" placeholder="New Password" className="py-2 px-3 mb-2" />
            </div>
          </div>

          {/* repeat password */}
          <div className="col-md-9 mt-3 px-4 ">
            <div className="repeatPassword d-flex flex-column">
              <label htmlFor="rePassword" className="mb-2 ms-2">Repeat Password *</label>
              <input type="password" name="rePassword" placeholder="Repeat Password" className="py-2 px-3 mb-2" />
            </div>
          </div>

          {/* button to save changes  */}
          <div className="button px-4 my-4">
            <button className="btn">Save Changes</button>
          </div>

        </div>
      </form>
    </div>
  </div>;
}
