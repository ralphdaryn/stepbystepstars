import "./WaiverForm.scss";
import { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const WaiverForm = () => {
  const [formData, setFormData] = useState({
    participantName: "",
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
        participantName: "",
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
      </div>
      <form className="waiver-form" onSubmit={handleSubmit}>
        <h2>Group Fitness Class Waiver and Release of Liability</h2>
        <div className="waiver-form__content">
          <h3>Nature of Activity:</h3>
          <p>
            <strong>Step By Step Club Inc. </strong> provides fitness related
            activities and classes including but not limited to: dance classes,
            strength classes, cardio, muscular endurance, climbing, jumping etc.
          </p>

          <h3>Waiver and Release:</h3>
          <p>By signing below, I acknowledge and agree to the following:</p>

          <ol>
            <li>
              <strong>Voluntary Participation:</strong> I am voluntarily
              participating in group fitness classes provided by Step By Step
              Club Inc. I understand that the activities may include exercises
              that involve strength, flexibility, cardiovascular conditioning,
              climbing, jumping, and other fitness components.
            </li>
            <li>
              <strong>Assumption of Risk:</strong> I understand that
              participating in physical exercise, including but not limited to
              aerobic and anaerobic activities, can be physically demanding. I
              am aware that the risk of injury from such activities exists,
              including but not limited to bumps, paralysis, death, muscle
              strains/sprains, abrasions and contusions, broken bones, brain
              injury, ligament and joint injuries, concussions, bruises,
              scrapes, falls, and other potential injuries. I agree to assume
              full responsibility for any risk of injury, damage, or harm that
              may result from my participation.
            </li>
            <li>
              <strong>Medical Clearance:</strong> I confirm that I am in good
              physical health and have consulted with my physician before
              participating in the class if necessary. I have disclosed any
              pre-existing medical conditions or injuries that may affect my
              ability to participate safely.
            </li>
            <li>
              <strong>Release of Liability:</strong> In consideration of being
              allowed to participate in the fitness classes, I hereby release
              and discharge Step By Step Inc., its owners, members, officers,
              employees, equipment manufacturers, representatives and sponsoring
              agencies from any and all liability, claims, demands, or causes of
              action related to injuries, death, damages, or losses that may
              occur arising from my participation. This release applies to any
              physical injury, illness, or damage that may occur as a result of
              my participation.
            </li>
            <li>
              <strong>Indemnification:</strong> I agree to indemnify and hold
              harmless Step By Step Club Inc., iits owners, members, officers,
              employees, equipment manufacturers, representatives and sponsoring
              agencies from any claims, damages, or legal actions arising out of
              my participation in fitness related activities.
            </li>
            <li>
              <strong>Consent to Medical Treatment:</strong> In the event of an
              emergency, I consent to receive any medical treatment deemed
              necessary by emergency personnel or healthcare providers. I
              understand that I am responsible for any medical expenses that may
              result from my injury or illness.
            </li>
            <li>
              <strong>Photograph and Video Release:</strong> I grant Step By
              Step Club Inc. permission to use photographs or videos taken
              during class for promotional purposes. I understand that I will
              not receive any compensation for the use of such images.
            </li>
          </ol>
        </div>

        <label>
          Name:
          <input
            type="text"
            name="participantName"
            value={formData.participantName}
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

export default WaiverForm;
