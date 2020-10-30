import { useState, useEffect } from "react";
import CollegeModel from '../../models/CollegeModel'

function useColleges(collegeId) {
    const [colleges, setColleges] = useState([]);

    function fetchColleges(id) {
        if (id) {
            CollegeModel.show(id).then((data)=> {
                setColleges(data.college_data);
            });
        } else {
            CollegeModel.all().then((data) => {
                setColleges(data.colleges_data);
            });
        }
    }

    useEffect(
        function () {
            fetchColleges(collegeId);
        },[collegeId]
    );
        // console.log(colleges)

        console.log(colleges)
    return [colleges, fetchColleges]
}

export default useColleges