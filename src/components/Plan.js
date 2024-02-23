import SectionHeading from "./SectionHeading";
import { ImInfinite } from "react-icons/im";
import { FaCheck } from "react-icons/fa6";

import ActionBtn from "./ActionBtn";

export default function Plan() {
  return (
    <div className="plan">
      <div className="container">
        <SectionHeading shortheading={"our"} mainHeading={"Plan"} />
        <div className="plan-2-grid">
          <PlanCard price={0} userClass={"Free"} />
          <PlanCard price={10} userClass={"Premium"} />
        </div>
      </div>
    </div>
  );
}

function PlanCard({ price, userClass }) {
  let features = null;

  if (userClass === "Free") {
    features = (
      <div className="plan-feature">
        <FaCheck className="feature-icon" />
        <p className="feature-text">Unlimited Access</p>
        <ImInfinite className="feature-icon" />
        <p className="feature-text">History</p>
        <ImInfinite className="feature-icon" />
        <p className="feature-text">Regional Language</p>
      </div>
    );
  } else {
    features = (
      <div className={`plan-feature `}>
        <FaCheck className="feature-icon" />
        <p className="feature-text">Unlimited Access</p>
        <FaCheck className="feature-icon" />
        <p className="feature-text">History</p>
        <FaCheck className="feature-icon" />
        <p className="feature-text">Regional Language</p>
      </div>
    );
  }

  return (
    <div className={`plan-card ${userClass === "Premium" ? "Premium" : ""}`}>
      <p className="plan-class">{userClass}</p>
      <p className="plan-price">{price}</p>
      {features}
      <ActionBtn icon={""} btn={"btn-white"}>
        Buy Now
      </ActionBtn>
    </div>
  );
}
