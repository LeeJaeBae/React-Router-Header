import Routes from './index';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className={'router-header'}>
			{Routes.Components.map((v) => {
				return (
					<Link className={'router-header-button'} to={v.path}>
						{v.name}
					</Link>
				);
			})}
		</div>
	);
};

export default Header;
