import React from "react";
import Rule from "./Rule";
import { v4 as uuidv4 } from "uuid";

const RuleGroup = ({ ruleGroup, updateRuleGroup, parentGroup }) => {
  const handleCombinatorChange = (e) => {
    updateRuleGroup({ ...ruleGroup, combinator: e.target.value });
  };

  const addRule = () => {
    const newRule = {
      id: uuidv4(),
      field: "",
      operator: "",
      value: ""
    };
    updateRuleGroup({
      ...ruleGroup,
      rules: [...ruleGroup.rules, newRule]
    });
  };

  const addGroup = () => {
    const newGroup = {
      id: uuidv4(),
      combinator: "and",
      rules: []
    };
    updateRuleGroup({
      ...ruleGroup,
      rules: [...ruleGroup.rules, newGroup]
    });
  };

  const updateRule = (index, updatedRule) => {
    const newRules = ruleGroup.rules.slice();
    newRules[index] = updatedRule;
    updateRuleGroup({ ...ruleGroup, rules: newRules });
  };

  const removeRule = (index) => {
    const newRules = ruleGroup.rules.slice();
    newRules.splice(index, 1);
    updateRuleGroup({ ...ruleGroup, rules: newRules });
  };

return (
  <div className="query-group">
    <div className="query-group-header">
      <select
        value={ruleGroup.combinator}
        onChange={handleCombinatorChange}
        className="combinator-select"
      >
        <option value="and">AND</option>
        <option value="or">OR</option>
      </select>
      {parentGroup && (
        <button
          className="remove-group-button"
          onClick={() => parentGroup()}
        >
          ✕
        </button>
      )}
    </div>
    <div className="query-group-children">
      {ruleGroup.rules.map((rule, index) => (
        <div key={rule.id}>
          {rule.rules ? (
            <RuleGroup
              ruleGroup={rule}
              updateRuleGroup={(newGroup) => updateRule(index, newGroup)}
              parentGroup={() => removeRule(index)}
            />
          ) : (
            <Rule
              rule={rule}
              updateRule={(newRule) => updateRule(index, newRule)}
              removeRule={() => removeRule(index)}
            />
          )}
        </div>
      ))}
    </div>
    <div className="query-group-actions">
      <button onClick={addRule}>+ Add Condition</button>
      <button onClick={addGroup}>+ Add Group</button>
    </div>
  </div>
);
};

export default RuleGroup;
