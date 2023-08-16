import { axiosPrivate } from '../api/axios';
import auth from '../utils/auth';

const useRefreshToken = () => {
    const refresh = async () => {
        const response = await axiosPrivate.get('/auth/refresh');

        auth.setAccessToken(response.data.access_token);
        return response.data.access_token;
    };

    return refresh;
};

export default useRefreshToken;
