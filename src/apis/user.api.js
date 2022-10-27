import { map } from 'utils/axios'
import { isSuccess } from 'utils/func'
import { USERS } from './_constanst'

export const getAllUsers = (params = {}) => {
	return map(({ data, ...rest }) => {
		return isSuccess(rest) ? { data: data } : { error: rest.response.data }
	}).get(USERS.GET, params)
}
export const getUserById = (id) => {
	return map(({ data, ...rest }) => {
		return isSuccess(rest) ? { data: data } : { error: rest.response.data }
	}).get(`${USERS.GETBYID}/${id}`)
}
