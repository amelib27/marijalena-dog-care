import { profile } from "../data.js";

export default function TrustBar() {
  const items = [
    { num: `${profile.yearsActive}+`, label: "Years walking Düsseldorf's dogs" },
    { num: `${profile.dogsInCare}+`, label: "Regular dogs in her care" },
    { num: "Insured", label: "& pet first-aid certified" },
    { num: `${profile.districtsCovered}`, label: "Districts covered" },
  ];

  return (
    <div className="trust-bar">
      <div className="trust-grid">
        {items.map((item) => (
          <div key={item.label}>
            <div className="num">{item.num}</div>
            <div className="label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
