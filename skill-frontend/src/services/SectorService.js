import axios from 'axios'

const SECTOR_BASE_REST_API_URL = 'http://localhost:8080/api/v1/sectors';

class SectorService {

    getAllSectors() {
        return axios.get(SECTOR_BASE_REST_API_URL)
    }

    createSector(sector) {
        return axios.post(SECTOR_BASE_REST_API_URL, sector)
    }

    getSectorById(sectorId) {
        return axios.get(SECTOR_BASE_REST_API_URL + '/' + sectorId);
    }

    updateSector(sectorId, sector) {
        return axios.put(SECTOR_BASE_REST_API_URL + '/' + sectorId, sector);
    }
}

export default new SectorService();