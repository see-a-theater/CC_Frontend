import HomeIconMenu from '@/components/HomeIconMenu';
import Hamburger from '@/components/Hamburger';
import Noti from '@/components/Notification/Noti';

import styled from 'styled-components';
import { useState } from 'react';

function Notification() {
	const mock_noti = [
		{
			type: 'play',
			category: '소극장 공연 소식',
			content:
				'소극장 공연 “실종" 등록 완료! 소극장 공연 페이지에서 확인해보세요!',
			when: '1시간 전',
			checked: false,
		},
		{
			type: 'board',
			category: '게시글 등록',
			content: '등록하신 게시글이 HOT 게시글에 등록되었습니다!',
			when: '6월 21일',
			checked: false,
		},
		{
			type: 'cc',
			category: '댓글 알림',
			content:
				'게시글 ‘홍익극연구회 <실종>’에 새로운 댓글이 달렸습니다. “나도 재밌게 봤는데..! 진짜 추천...”',
			when: '6월 21일',
			checked: false,
		},
		{
			type: 'cc',
			category: '추천 공연',
			content:
				'소극장 공연 “실종" 어떠세요? #스릴러 #로맨스 #탐험 윤경님 취향에 딱!',
			when: '6월 21일',
			checked: true,
		},
		{
			type: 'cc',
			category: '댓글 알림',
			content:
				'게시글 ‘홍익극연구회 <실종>’에 새로운 댓글이 달렸습니다. “나도 재밌게 봤는데..! 진짜 추천...”',
			when: '6월 21일',
			checked: true,
		},
		{
			type: 'cc',
			category: '추천 공연',
			content:
				'소극장 공연 “실종" 어떠세요? #스릴러 #로맨스 #탐험 윤경님 취향에 딱!',
			when: '6월 21일',
			checked: true,
		},
	];

	const [activeCategory, setActiveCategory] = useState('전체');

	return (
		<>
			<Mobile>
				<Hamburger back={true} title={'알림'} noIcon={true} />
				<BtnArea>
					<Button
						active={activeCategory === '전체'}
						onClick={() => setActiveCategory('전체')}
					>
						전체
					</Button>
					<Button
						active={activeCategory === '소극장 공연'}
						onClick={() => setActiveCategory('소극장 공연')}
					>
						소극장 공연
					</Button>
					<Button
						active={activeCategory === '추천 공연'}
						onClick={() => setActiveCategory('추천 공연')}
					>
						추천 공연
					</Button>
				</BtnArea>

				<Content>
					<NotiArea>
						{mock_noti?.map((data) => (
							<Noti
								type={data.type}
								category={data.category}
								content={data.content}
								when={data.when}
								checked={data.checked}
							/>
						))}
					</NotiArea>
				</Content>
			</Mobile>

			<SideMenuWrapper>
				<HomeIconMenu isWeb={true} selectedMenu="notification" />
			</SideMenuWrapper>
		</>
	);
}
export default Notification;

const Mobile = styled.div`
	//padding: 0 20px;

	@media (min-width: 768px) {
		display: none;
	}
`;
const Web = styled.div`
	display: none;
	@media (min-width: 768px) {
		width: 100vw;
		display: flex;
	}
`;
const Content = styled.div`
	display: flex;
	flex-direction: column;
`;
const NotiArea = styled.div`
	display: flex;
	flex-direction: column;

	gap: 2px;
`;
const SideMenuWrapper = styled.div`
	width: 101px;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	flex-shrink: 0;
	display: none;
	background-color: ${({ theme }) => theme.colors.grayWhite};
	@media (min-width: 768px) {
		display: block;
	}
`;

const Wrapper = styled.div`
	@media (min-width: 768px) {
		padding-left: 100px;
	}
`;

const BtnArea = styled.div`
	padding: 20px 20px;

	display: flex;
	gap: 15px;
`;

const Button = styled.button`
	padding: 8px 20px;
	justify-content: center;
	align-items: center;

	background-color: ${({ theme, active }) =>
		active ? theme.colors.pink600 : theme.colors.gray200};

	font-size: ${({ theme }) => theme.font.fontSize.body14};
	font-weight: ${({ theme }) => theme.font.fontWeight.normal};
	color: ${({ theme, active }) =>
		active ? theme.colors.grayWhite : theme.colors.gray500};

	border-radius: 25px;
`;
