import { useState, useEffect } from "react";
import CollegeModel from '../../models/CollegeModel'

function useColleges(collegeId) {
    const [colleges, setColleges] = useState([]);

    function fetchColleges(id) {
        if (id) {
            CollegeModel.show(id).then((data)=> {
                setColleges(data.college);
            });
        } else {
            CollegeModel.all().then((data) => {
                setColleges(data.colleges);
            });
        }
    }

    useEffect(
        function () {
            fetchColleges(collegeId);
        },[collegeId]
    );
    return [colleges, fetchColleges]
}

export default useColleges