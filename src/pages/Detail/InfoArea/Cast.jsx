import CastCard from '@/components/Detail/CastCard';
import Staff from '@/components/Detail/Staff';

import profile from '@/assets/mock/images/프로필.png';
import styled from 'styled-components';

function Cast(props) {
	const mockdata = [
		{
			path: profile,
			id: 1,
			name: '이지후',
			role: '7급',
		},
		{
			path: profile,
			id: 2,
			name: '권혁진',
			role: '5급',
		},
		{
			path: profile,
			id: 3,
			name: '이승재',
			role: '6급',
		},
		{
			path: profile,
			id: 4,
			name: '임유빈',
			role: '학생1',
		},
	];
	const staffData = [
		{
			role: '원작',
			name: '최문애',
		},
		{
			role: '연출/ 각색',
			name: '서준서',
		},
		{
			role: '조연출',
			name: '권혁진, 이보미',
		},
	];
	
	console.log('props:', props);

	return (
		<Container>
			<Content>
				<Title>극단</Title>
				{/*props?.result.casting.actorName*/}
				<p>홍익극연구회</p>
			</Content>

			<Content>
				<Title>출연진</Title>
				<Casts>
					{/*props?.result.casting.castingImageUrl*/}
					{/*props?.result.casting.actorName*/}
					{/*props?.result.casting.castingName*/}
					{mockdata.map((data) => (
						<CastCard
							key={data.id}
							path={data.path}
							name={data.name}
							role={data.role}
						/>
					))}
				</Casts>
			</Content>

			<Content>
				<Title>감독 및 스태프</Title>
				{staffData.map((data) => (
					<Staff name={data.name} role={data.role} />
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
