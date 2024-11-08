import "./WaiverFormKids.scss";
import { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import BackButton from "../BackButton/BackButton";

const WaiverFormKids = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    date: "",
    address: "",
    phone: "",
    email: "",
    emergencyContact: "",
    emergencyPhone: "",
    childName: "",
    childAge: "",
  });

  const sigCanvas = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignatureClear = () => {
    sigCanvas.current.clear();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const signatureData = sigCanvas.current
      .getTrimmedCanvas()
      .toDataURL("image/png");

    const waiverData = {
      ...formData,
      signature: signatureData,
    };

    try {
      const response = await fetch("/.netlify/functions/waiver", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(waiverData),
      });

      const result = await response.json();
      console.log(result);
      alert("Waiver submitted successfully!");
      setFormData({
        parentName: "",
        date: "",
        address: "",
        phone: "",
        email: "",
        emergencyContact: "",
        emergencyPhone: "",
        childName: "",
        childAge: "",
      });
      sigCanvas.current.clear();
    } catch (err) {
      console.error("Error submitting waiver:", err);
      alert("Error submitting waiver. Please try again.");
    }
  };

  return (
    <div>
      <div className="waiver-form__button">
        <BackButton />
      </div>
      <form className="waiver-form" onSubmit={handleSubmit}>
        <h2>Kids Play Area Waiver and Release of Liability</h2>
        <div className="waiver-content">
          <p>
            <strong>Step By Step Club Inc.</strong> is a children’s indoor play area that offers opportunities for pretend play in real-world environments and fitness activities. I acknowledge and agree to the following terms:
          </p>

          <ol>
            <li>
              <strong>Voluntary Participation:</strong> I voluntarily allow my child(ren) to participate in activities at Step By Step Club Inc. and understand the associated risks.
            </li>
            <li>
              <strong>Assumption of Risk:</strong> I understand that participation may involve risks, including but not limited to bumps, scrapes, and more serious injuries.
            </li>
            <li>
              <strong>Supervision:</strong> I am responsible for supervising my child(ren) and understand that Step By Step Club Inc. is not responsible for direct supervision.
            </li>
            <li>
              <strong>Release of Liability:</strong> I release Step By Step Club Inc. from liability for injuries or damages that may occur.
            </li>
            <li>
              <strong>Indemnification:</strong> I agree to indemnify Step By Step Club Inc. from any claims related to my child(ren)’s participation.
            </li>
            <li>
              <strong>Medical Emergency:</strong> I consent to emergency medical treatment for my child(ren) and accept responsibility for any related expenses.
            </li>
            <li>
              <strong>Rules and Conduct:</strong> I agree to ensure my child(ren) follow(s) the rules of Step By Step Club Inc.
            </li>
            <li>
              <strong>Photograph and Video Release:</strong> I grant Step By Step Club Inc. permission to use photos or videos of my child(ren) for promotional purposes.
            </li>
          </ol>
        </div>

        <label>
          Parent/Guardian Name:
          <input
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Emergency Contact:
          <input
            type="text"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Emergency Phone:
          <input
            type="tel"
            name="emergencyPhone"
            value={formData.emergencyPhone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Child’s Name:
          <input
            type="text"
            name="childName"
            value={formData.childName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Child’s Age:
          <input
            type="number"
            name="childAge"
            value={formData.childAge}
            onChange={handleChange}
            required
          />
        </label>

        <h3>Signature</h3>
        <SignatureCanvas
          ref={sigCanvas}
          penColor="black"
          canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
        />

        <button type="button" onClick={handleSignatureClear}>
          Clear Signature
        </button>

        <button type="submit">Submit Waiver</button>
      </form>
    </div>
  );
};

export default WaiverFormKids;
