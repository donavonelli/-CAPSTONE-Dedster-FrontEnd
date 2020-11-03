const URL = 'http://localhost:3001/services'

class ServiceModel {
    static all = () => {
        return fetch(URL).then(response => response.json());
    }
    static show = (serviceId) => {
        return fetch(`${URL}/${serviceId}`).then(response => response.json());
    }
}

export default ServiceModel