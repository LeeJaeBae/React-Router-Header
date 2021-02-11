import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Routes from 'react-router-header';

const User = () => {
	const params = useParams();
	useEffect(() => {
		console.log('mount!');
		console.log(params);
	});
	return <>uesr : {params.id ? params.id : 'user'}</>;
};

export const DefaultUser = () => {
	Routes.add(User, '/user', 'DefaultUser', true);
};

export default function UserPage() {
	Routes.add(User, '/user/:id', 'User', true);
}
