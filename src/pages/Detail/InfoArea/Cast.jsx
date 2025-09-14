import CastCard from '@/components/Detail/CastCard';
import Staff from '@/components/Detail/Staff';

import styled from 'styled-components';

import ChevronRight from '@/assets/icons/chevronRight.svg?react';
import { useNavigate } from 'react-router-dom';

function Cast(props) {
	const navigate = useNavigate();
	const goPerformer = () => {
		navigate(`/production/${props?.data.result.memberId}`);
		window.scrollTo(0, 0);
	};
	return (
		<Container>
			<Content>
				<Title>극단</Title>
				<ContentH onClick={goPerformer}>
					<Text>{props?.data.result.performerName}</Text>
					<ChevronRightGray />
				</ContentH>
			</Content>

			<Content>
				<Title>출연진</Title>
				<Casts>
					{props?.data.result.casting.map((data) => (
						<CastCard
							//key={data.id}
							path={data.castingImageUrl}
							name={data.actorName}
							role={data.castingName}
						/>
					))}
				</Casts>
			</Content>

			<Content>
				<Title>감독 및 스태프</Title>
				{props?.data.result.staff.map((data) => (
					<Staff name={data.staffName} role={data.position} />
				))}
			</Content>
		</Container>
	);
}

export default Cast;
const ChevronRightGray = styled(ChevronRight)`
	color: ${({ theme }) => theme.colors.gray400};
	height: 15px;
`;
const Container = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 32px;

	padding: 20px 0;
`;
const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;
const ContentH = styled.div`
	display: flex;
	align-items: center;
`;
const Text = styled.div`
	font-size: ${({ theme }) => theme.font.fontSize.body13};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.grayMain};

	@media (min-width: 768px) {
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-weight: ${({ theme }) => theme.font.fontWeight.medium};
		color: ${({ theme }) => theme.colors.grayMain};
	}
`;
const Title = styled.div`
	font-size: ${({ theme }) => theme.font.fontSize.body16};
	font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
	color: ${({ theme }) => theme.colors.pink500};
`;
const Casts = styled.div`
	display: flex;
	gap: 32px;
	flex-wrap: wrap;
`;
