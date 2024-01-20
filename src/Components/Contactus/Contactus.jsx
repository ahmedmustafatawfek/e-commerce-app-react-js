import React from "react";
import styles from "./Contactus.module.css";
import logo from "../../images/eShopify-removebg-preview.png";
import mapImg from "../../images/Elements/contact us/Paste image.png"


export default function Contactus() {
  return <>
    <div className={`${styles.background}`}>
      <div className={`${styles.hero}`}>
        <h2>Contact us</h2>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis voluptatum deleniti.
        </p>
      </div>
    </div>
    <section className="w-100 position-relative">
      <img src={mapImg} alt="maps" className="w-100" />
      <span className={styles.Pin}></span>
      <img src={logo} alt="logo" className={`${styles.logoPin} `} />
      <div className={`container ${styles.form}`}>
        <p className="fs-2 ms-3 mb-5 mt-3">Get in touch</p>
        {/* form  */}
        <form>
          <div className="row">
            <div className="col-md-6 mb-2 ps-4">
              <div className="fName d-flex flex-column">
                <label htmlFor="fName" className="mb-2 ms-1">First Name</label>
                <input type="text" name="fName" placeholder="First Name" className="p-3  mb-2" />
              </div>
            </div>

            <div className="col-md-6 mb-2 pe-4">
              <div className="lName d-flex flex-column">
                <label htmlFor="lName" className="mb-2 ms-1">Last Name</label>
                <input type="text" name="lName" placeholder="Last Name" className="p-3  mb-2" />
              </div>
            </div>

            <div className="col-md-12 mt-2 px-4">
              <div className="email d-flex flex-column">
                <label htmlFor="email" className="mb-2 ms-1">Email</label>
                <input type="email" name="email" placeholder="Email" className="p-3 mb-2" />
              </div>
            </div>

            <div className="col-md-12 mt-3 px-4">
              <div className="textArea d-flex flex-column">
                <label htmlFor="textArea" className="mb-2 ms-1">Message</label>
                <textarea rows="4" name="textArea" placeholder="Message" className="mb-4 p-3" />
              </div>
            </div>

            <div className="button px-4 my-4">
              <button className="btn w-100 ">Send message</button>
            </div>

          </div>
        </form>
      </div>
    </section>

    <section className={`container px-5 py-4 ${styles.Questions}`}>
      <h4 className="fs-2 py-2">Frequently asked</h4>
      <div className={styles.question}>
        <div className="question d-flex justify-content-between align-items-center">
          <h6>How does ESHOPIFY work?</h6>
          <i class="fa-solid fa-minus"></i>
        </div>
        <p >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum fuga.</p>
      </div>

      <div className={`${styles.question} d-flex justify-content-between align-items-center`}>
        <h6>Which payment methods are accepted?</h6>
        <i class="fa-solid fa-plus"></i>
      </div>

      <div className={`${styles.question} d-flex justify-content-between align-items-center`}>
        <h6>How to get familiar with Figma?</h6>
        <i class="fa-solid fa-plus"></i>
      </div>

      <div className={`${styles.question} d-flex justify-content-between align-items-center`}>
        <h6>Can I get a refund?</h6>
        <i class="fa-solid fa-plus"></i>
      </div>

      <div className={`${styles.question} d-flex justify-content-between align-items-center`}>
        <h6>Where is my order?</h6>
        <i class="fa-solid fa-plus"></i>
      </div>



      <div className={`pt-3 d-flex justify-content-between align-items-center`}>
        <h6>I have a problem</h6>
        <i class="fa-solid fa-plus"></i>
      </div>


    </section>
  </>
}
