import React, { useState } from "react";
import RuleGroup from "./RuleGroup";
import { v4 as uuidv4 } from "uuid";
import './QueryBuilder.css';


const initialQuery = {
  id: uuidv4(),
  combinator: "and",
  rules: []
};

const QueryBuilder = () => {
  const [query, setQuery] = useState(initialQuery);

  const updateQuery = (newQuery) => {
    setQuery({ ...newQuery });
  };

  return (
    <div>
      <RuleGroup
        ruleGroup={query}
        updateRuleGroup={updateQuery}
        parentGroup={null}
      />
      <pre>{JSON.stringify(query, null, 2)}</pre>
    </div>
  );
};

export default QueryBuilder;
