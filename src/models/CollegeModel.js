const URL = 'http://localhost:8000/colleges'

class CollegeModel {
    static all = () => {
        return fetch(URL).then(response => response.json());
    }

    static show = (collegeId) => {
        return fetch(`${URL}/${collegeId}`).then(response => response.json());
    }
}

export default CollegeModel