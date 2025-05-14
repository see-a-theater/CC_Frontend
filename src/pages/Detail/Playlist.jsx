import styled from 'styled-components';

import Hamburger from '@/components/Hamburger';
import PlayCard from '@/components/Detail/PlayCard';
import NowShowing from '@/components/Detail/NowShowing';

function Playlist() {
	return (
		<Container>
			<Hamburger />
			<Today>
				<h3 className="Todays">오늘 진행하는 소극장 공연</h3>
				<PlayCard />
			</Today>
			<Now>
				<h3 className="onGoing"> 현재 진행중 </h3>
				<MappingArea>
					<NowShowing />
					<NowShowing />
				</MappingArea>
			</Now>
		</Container>
	);
}

export default Playlist;

const Container = styled.div`
	width: 100%;
	padding: 20px;
`;

const Today = styled.div`
	.Todays {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		margin-bottom: 20px;
	}
	margin-bottom: 40px;
`;

const Now = styled.div`
	.onGoing {
		margin-bottom: 24px;
	}
`;
const MappingArea = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;
