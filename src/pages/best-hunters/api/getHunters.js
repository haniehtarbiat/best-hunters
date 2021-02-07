// @flow
import axios from 'axios-config';
/**
 * Get all hunters
 * @returns {Promise<*>}
 */
const getHunters = async (): Object => {
    try {
        const url = '/api/bests';
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
};
export default getHunters;
