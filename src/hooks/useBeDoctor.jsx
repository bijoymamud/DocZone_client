import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useBeDoctor = () => {
  const { user, loading } = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: beDoctor = [] } = useQuery({
    queryKey: ['appoinment', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/beDoctor?email=${user?.email}`)
      return res.data;
    },
  })
  return [beDoctor, refetch]
};

export default useBeDoctor;