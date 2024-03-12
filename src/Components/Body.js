import React from "react";

export default function Body() {
  return (
    <div>
      <div className="img-container">
        <img
          src="https://nationaltoday.com/wp-content/uploads/2022/07/17-Family-Wellness-Month-1200x834.jpg"
          width={"100%"}
          height={"605"}
          alt="images"
        />
      </div>
      <div className="text-container1">
        <h1>Think Health. Think Massage</h1>
        <p>
          We are open 9am to 6pm; Monday through Sunday. If you would like to
          scedule an appointment with us, please call us at 987-654-3210 today!
        </p>
        <div className="btn-container">
          <button className="btn1">LEARN MORE ABOUT US</button>
          <button className="btn2">CONTACT US TODAY</button>
        </div>
      </div>
      <div className="text-container2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
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
