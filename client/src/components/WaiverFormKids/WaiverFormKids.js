import "./WaiverFormKids.scss";
import { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const WaiverFormKids = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    date: "",
    address: "",
    phone: "",
    email: "",
    emergencyContact: "",
    emergencyPhone: "",
    children: [{ childName: "", childAge: "" }],
  });

  const sigCanvas = useRef(null);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "childName" || name === "childAge") {
      const newChildren = [...formData.children];
      newChildren[index][name] = value;
      setFormData({ ...formData, children: newChildren });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addChild = () => {
    setFormData({
      ...formData,
      children: [...formData.children, { childName: "", childAge: "" }],
    });
  };

  const removeChild = (index) => {
    const newChildren = formData.children.filter((_, i) => i !== index);
    setFormData({ ...formData, children: newChildren });
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
        children: [{ childName: "", childAge: "" }],
      });
      sigCanvas.current.clear();
    } catch (err) {
      console.error("Error submitting waiver:", err);
      alert("Error submitting waiver. Please try again.");
    }
  };

  return (
    <div>
      <div className="waiver-form-kids__button">
      </div>
      <form className="waiver-form-kids" onSubmit={handleSubmit}>
        <h2>Kids Play Area Waiver and Release of Liability</h2>
        <div className="waiver-form-kids__content">
          <p>
            <strong>Step By Step Club Inc.</strong> is a children’s indoor play
            area facility that provides an opportunity for montessori pretend
            play in mimicking real world environments and fitness-related
            recreational activities for children. Step By Step Club Inc.
            provides each child with the opportunity to be physically active
            while exploring different environments (including but not limited to
            bouncy castles, stairs, ramps). There are many benefits to pretend
            play, health and wellness, Step By Step Club Inc. and staff value
            participant safety and take great measures to reduce the risk of
            injury. Step By Step Club Inc. informs all PARENT(s)/GUARDIAN(s) to
            understand that there are risks of injury in all physical activity.
          </p>

          <h3>Waiver and Release:</h3>
          <p>
            By signing below, I waive certain legal rights, including the right
            to sue. I acknowledge and agree to the following:
          </p>

          <ol>
            <li>
              <strong>Voluntary Participation:</strong> I, on behalf of myself,
              accompanying adults and/or the minor, my dependents, heirs,
              executors, successors, assigns and personal representatives
              voluntarily allow my child(ren) to participate in the play
              activities at Step by Step Club Inc. play area. I understand that
              the play area is designed for children and that physical activity,
              interaction with other children, and the use of play equipment may
              pose risks.
            </li>
            <li>
              <strong>Assumption of Risk:</strong> I acknowledge that
              participation at Step By Step Club Inc. may involve certain risks,
              including but not limited to bumps, paralysis, death, muscle
              strains/sprains, abrasions and contusions, broken bones, brain
              injury, ligament and joint injuries, concussions, bruises,
              scrapes, falls, and other potential injuries. I understand that
              while every effort will be made to provide a safe environment,
              accidents can happen, and I assume full responsibility for any
              risk of injury to my child(ren) arising from participation.
            </li>
            <li>
              <strong>Supervision:</strong> I understand that I am responsible
              for supervising my child(ren) at all times while they are in the
              play area. I agree that Step By Step Club Inc. is not responsible
              for supervising my child(ren).
            </li>
            <li>
              <strong>Release of Liability:</strong> In consideration of
              allowing my child(ren) to use the play area, I, for myself, my
              child or ward, and on behalf of my or their heirs, assigns,
              personal representatives and next of kin, hereby release and hold
              harmless Step By Step Club Inc., its owners, members, officers,
              employees, equipment manufacturers, representatives and sponsoring
              agencies from any and all liability, claims, demands, or causes of
              action related to injuries, death, damages, or losses that may
              occur as a result of using the play area.
            </li>
            <li>
              <strong>Indemnification:</strong> I agree to indemnify and hold
              harmless Step By Step Club Inc., its owners, directors, officers,
              affiliates, employees, volunteers, independent contractors,
              equipment providers, agents, and representatives from any claims,
              damages, or legal actions arising out of my child(ren)’s
              participation in the play activities.
            </li>
            <li>
              <strong>Medical Emergency:</strong> In the event of an emergency,
              I consent to any necessary medical treatment for my child(ren) by
              medical professionals. I understand that I am responsible for any
              medical expenses incurred.
            </li>
            <li>
              <strong>Rules and Conduct:</strong> I, for myself, my child or
              ward agree to abide by and ensure my child(ren) follow the rules
              and guidelines set forth by Step By Step Club Inc. for the safety
              and well-being of all participants. I understand that failure to
              follow the rules may result in my child(ren) being asked to leave
              the play area.
            </li>
            <li>
              <strong>Photograph and Video Release:</strong> I grant Step By
              Step Club Inc. permission to take and use photographs or videos of
              my child(ren) while participating in the play area for promotional
              purposes. I understand that no compensation will be provided for
              such use.
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

        <h3>Children’s Information</h3>
        {formData.children.map((child, index) => (
          <div key={index} className="child-info">
            <label>
              Child’s Name:
              <input
                type="text"
                name="childName"
                value={child.childName}
                onChange={(e) => handleChange(e, index)}
                required
              />
            </label>
            <label>
              Child’s Age:
              <input
                type="number"
                name="childAge"
                value={child.childAge}
                onChange={(e) => handleChange(e, index)}
                required
              />
            </label>
            {formData.children.length > 1 && (
              <button type="button" onClick={() => removeChild(index)}>
                Remove Child
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={addChild}>
          Add Another Child
        </button>

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
