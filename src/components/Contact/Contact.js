// import "./Contact.scss";
// import { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     phoneNumber: "", // New phone number field
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form data submitted:", formData);
//   };

//   return (
//     <div id="contact" className="contact">
//       <div className="contact__container">
//         <h2 className="contact__title">Contact</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div>
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div>
//             <label htmlFor="phoneNumber">Phone Number</label>
//             <input
//               type="text"
//               id="phoneNumber"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleInputChange}
//             ></textarea>
//           </div>
//           <button className="contact__button" type="submit">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import "./Contact.scss";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "", // New phone number field
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <label htmlFor="name" className="contact__label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="contact__input"
            />
          </div>

          <div className="contact__form-group">
            <label htmlFor="email" className="contact__label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="contact__input"
            />
          </div>

          <div className="contact__form-group">
            <label htmlFor="phoneNumber" className="contact__label">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="contact__input"
            />
          </div>

          <div className="contact__form-group">
            <label htmlFor="message" className="contact__label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="contact__textarea"
            ></textarea>
          </div>
          <button className="contact__button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
