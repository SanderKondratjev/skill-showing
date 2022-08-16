import axios from 'axios'

const SECTOR_BASE_REST_API_URL = 'http://localhost:8080/api/v1/sectors';
const USER_BASE_REST_API_URL = 'http://localhost:8080/api/v1/users';

class SectorService {

    getAllSectors() {
        return axios.get(SECTOR_BASE_REST_API_URL)
    }

    getSectorById(sectorId) {
        return axios.get(SECTOR_BASE_REST_API_URL + '/' + sectorId);
    }

    getUserById(userId) {
        return axios.get(USER_BASE_REST_API_URL + '/' + userId)
    }

    createUser(user) {
        return axios.post(USER_BASE_REST_API_URL, user);
    }
}

export default new SectorService();