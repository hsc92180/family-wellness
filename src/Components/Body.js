import React from "react";
import "./Body.css";
export default function Body() {
  return (
    <div>
      <div className="img-container">
        <img
          src="https://nationaltoday.com/wp-content/uploads/2022/07/17-Family-Wellness-Month-1200x834.jpg"
          width={"100%"}
          height={"100%"}
          alt="images"
        />
      </div>
      <div className="text-container1">
        <h1>Think Health. Think Massage</h1>
        <p>
          We are open 9am to 6pm; Monday through Sunday. If you would like to
          scedule an appointment<br></br> with us, please call us at 987-654-3210 today!
        </p>
        <div className="btn-container">
          <button className="btn1">LEARN MORE ABOUT US</button>
          <button className="btn2">CONTACT US TODAY</button>
        </div>
      </div>
      <div className="text-container2">
        <p>
          Are you looking for aprofessional, registered  massage therapist? Sample Massage Therapy has 4 registered assage therapist who can provide clinical massage.
        </p>
        <p>
          we commited toyour long  term health and well-being. Our multi-discipilinary clinic provides a balanced approch to a healthy lifestyle. Enhance your ha
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <hr />
      <div id="contact">
        <h3>Family Wellness Massage Theraphy</h3>
        <p>9876 Main Street, Suite 123, Mainland, ML123456</p>
        <p>987-654-3210</p>
      </div>
    </div>
  );
}
