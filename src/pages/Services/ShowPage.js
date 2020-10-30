import React from "react";
import ServiceCard from '../../components/Services/ServiceCard';

import useServices from '../../hooks/Services/useServices';

function ServiceShow(props) {
  const [service] = useServices(props.match.params.id);
  return service ? <ServiceCard service={service} /> : <h3>Loading...</h3>;
}

export default ServiceShow;
