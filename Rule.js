import React from "react";

const fields = [
  { name: "FirstName", label: "First Name" },
  { name: "LastName", label: "Last Name" },
  { name: "Age", label: "Age" },
  { name: "Country", label: "Country" }
];

const operators = [
  { name: "=", label: "=" },
  { name: "!=", label: "!=" },
  { name: ">", label: ">" },
  { name: "<", label: "<" },
  { name: "contains", label: "Contains" }
];

const Rule = ({ rule, updateRule, removeRule }) => {
  const handleChange = (field, value) => {
    updateRule({ ...rule, [field]: value });
  };

  return (
  <div className="query-rule">
    <select
      className="field-select"
      value={rule.field}
      onChange={(e) => handleChange("field", e.target.value)}
    >
      <option value="">Field</option>
      {fields.map((f) => (
        <option key={f.name} value={f.name}>
          {f.label}
        </option>
      ))}
    </select>
    <select
      className="operator-select"
      value={rule.operator}
      onChange={(e) => handleChange("operator", e.target.value)}
    >
      <option value="">Operator</option>
      {operators.map((o) => (
        <option key={o.name} value={o.name}>
          {o.label}
        </option>
      ))}
    </select>
    <input
      type="text"
      className="value-input"
      value={rule.value}
      onChange={(e) => handleChange("value", e.target.value)}
      placeholder="Value"
    />
    <button className="remove-rule-button" onClick={removeRule}>
      ✕
    </button>
  </div>
);

};

export default Rule;
