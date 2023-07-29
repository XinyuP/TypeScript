import axios from 'axios';
import _ from "lodash"; // lodash does not have a type file come with it // use npm install --save-dev @types/lodash
axios
	.get('https://jsonplaceholder.typicode.com/users/1')
    .then((res) => {
        
        console.log('woo');
        console.log(res.data);
	})
	.catch((e) => {
		console.log('error', e);
	});
