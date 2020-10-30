// import { useState, useEffect } from "react";
// import ServiceModel from '../../models/ServiceModel'
// import PostModel from '../../models/PostModel'

// function usePosts(serviceId, postId) {
//     const [services, setServices] = useState([]);

//     function fetchPosts(id) {
//         if (id) {
//             PostModel.show(id).then((data)=> {
//                 setServices(data.service_post_data);
//             });
//         } else {
//             PostModel.all(serviceId).then((data) => {
//                 setServices(data.services_data);
//             });
//         }
//     }

//     useEffect(
//         function () {
//             fetchServices(serviceId,);
//         },[serviceId]
//     );
//         console.log(services)


//     return [services, fetchServices]
// }

// export default useServices