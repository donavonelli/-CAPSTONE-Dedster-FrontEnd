import { useState, useEffect } from "react";
import ServiceModel from '../../models/ServiceModel'

function useServices(serviceId) {
    const [services, setServices] = useState([]);

    function fetchServices(id) {
        if (id) {
            ServiceModel.show(id).then((data)=> {
                setServices(data.service);
            });
        } else {
            ServiceModel.all().then((data) => {
                setServices(data.services);
            });
        }
    }

    useEffect(
        function () {
            fetchServices(serviceId);
        },[serviceId]
    );


    return [services, fetchServices]
}

export default useServices