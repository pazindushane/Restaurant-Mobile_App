import { SAVE_USER, GET_USER } from './Usertypes';

import axios from 'axios';

export const saveuser  = producto => async dispatch => {
	const response = await axios.post('http://192.168.1.6:8080/api/user/save', producto, {
		method: 'POST',
          body: JSON.stringify({
            // title: "new_title",
            // body: "new_body",
            // userId: "userid"
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
	});
	dispatch({
		type: SAVE_USER,
		payload: response.data
	});
	console.log(response.data);
		console.log(response.request);
}