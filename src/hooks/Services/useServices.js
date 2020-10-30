import { useState, useEffect } from "react";
import ServiceModel from '../../models/ServiceModel'

function useServices(serviceId) {
    const [services, setServices] = useState([]);

    function fetchServices(id) {
        if (id) {
            ServiceModel.show(id).then((data)=> {
                setServices(data.service_data);
            });
        } else {
            ServiceModel.all().then((data) => {
                setServices(data.services_data);
            });
        }
    }

    useEffect(
        function () {
            fetchServices(serviceId);
        },[serviceId]
    );
        console.log(services)


    return [services, fetchServices]
}

export default useServices