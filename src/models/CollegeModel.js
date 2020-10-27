const URL = 'http://localhost:8000/colleges'

class CollegeModel {
    static all = () => {
        return fetch(URL).then(response => response.json());
    }
}

export default CollegeModel