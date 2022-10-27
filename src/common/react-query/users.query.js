import { useQuery } from '@tanstack/react-query/build/lib/useQuery'
import { getAllUsers } from 'apis/user.api'

export const useUserQuery = () => {
	return useQuery(['users'], getAllUsers)
}
