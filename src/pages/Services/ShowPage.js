import React from "react";
import ServiceCard from '../../components/Services/ServiceCard';

import useServices from '../../hooks/Services/useServices';

function ServiceShow(props) {
  const [service] = useServices(props.match.params.id);
  return service ? <div><ServiceCard service={service} /> <h3>Go to {service.name}'s posts</h3></div>: <h3>Loading...</h3>;
}

export default ServiceShow;
