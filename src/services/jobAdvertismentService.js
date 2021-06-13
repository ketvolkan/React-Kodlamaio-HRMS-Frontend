import axios from "axios"

export default class JobAdvertisementService {
    getAll() {
        return axios.get("http://localhost:8080/api/jobAdvertisements/getall");
    }
    getAllByActivity(activity) {
        return axios.get("http://localhost:8080/api/jobAdvertisements/getallbyActivity?activity=" + activity);
    }
    setActivityTrue(id) {
        axios.post('http://localhost:8080/api/jobAdvertisements/setActive?id=' + id)
    }
    setActivityFalse(id) {
        axios.post('http://localhost:8080/api/jobAdvertisements/setPasive?id=' + id)
    }
    deleteAds(id) {
        axios.delete('http://localhost:8080/api/jobAdvertisements/delete?id=' + id)
    }
    addJobAds(values) {
        axios.post("http://localhost:8080/api/jobAdvertisements/add", values,{
            headers: {
                'Content-Type': 'application/json',
                
            }})
    }

}