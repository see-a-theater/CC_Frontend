import HomeIconMenu from '@/components/HomeIconMenu';
import Hamburger from '@/components/Hamburger';
import NotiComponent from '@/components/Notification/NotiComponent';

import styled from 'styled-components';

function Notification() {
	return (
		<>
			<Mobile>
				<Hamburger back={true} title={'알림'} noIcon={true} />
				<NotiComponent/>
			</Mobile>
		</>
	);
}
export default Notification;

const Mobile = styled.div`
	@media (min-width: 768px) {
		display: none;
	}
`;