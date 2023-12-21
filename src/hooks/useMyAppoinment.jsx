import { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useMyAppoinment = () => {
  const { user, loading } = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: myAppintment = [] } = useQuery({
    queryKey: ['appoinment', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/appoinment?email=${user?.email}`)
      return res.data;
    },
  })
  return [myAppintment, refetch]
};

export default useMyAppoinment;