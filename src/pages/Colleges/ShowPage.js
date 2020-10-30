import React from "react";
import CollegeCard from '../../components/Colleges/CollegeCard';

import useColleges from '../../hooks/Colleges/useColleges';

function CollegeShow(props) {
  const [college] = useColleges(props.match.params.id);
  return college ? <div><CollegeCard college={college} /></div>: <h3>Loading...</h3>;
}

export default CollegeShow;