import CastCard from '@/components/Detail/CastCard';
import Staff from '@/components/Detail/Staff';

//import profile from '@/assets/mock/images/프로필.png';
import styled from 'styled-components';

function Cast(props) {
	console.log('props:', props);

	return (
		<Container>
			<Content>
				<Title>극단</Title>
				{/*극단 정보 부재*/}
				<p>홍익극연구회</p>
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
