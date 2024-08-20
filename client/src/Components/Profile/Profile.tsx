import React,{ ChangeEvent, useState } from "react";
import "./profile.css";
import { RxAvatar } from "react-icons/rx";
const Profile = () => {
 const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  address: "",
  phoneNumber: ""
});

const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
 const { name, value } = e.target;
 setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e :ChangeEvent<HTMLFormElement>) => {
 e.preventDefault();
 console.log(formData);
};
  return (
    <div className="Profile_container">
      <div className="Profile_container_01">
        <div className="Profile_container_01_items">
          <div className="Profile_items_01_02">
          <div>
            <RxAvatar className="Avatar" />
          </div>
          <div className="profile_headings">
            <h2>ASR</h2>
            <h3>Aditya Singh Rawat</h3>
          </div>
          </div>

          <div className="profile_btn">
            <button>Store</button>
            <button>Logout</button>
          </div>
        </div>
      </div>

      <div className="Profile_container_02">
       <h3>Update Profile</h3>
      <form onSubmit={handleSubmit}>
          <div className="form_group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form_group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form_group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form_group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
