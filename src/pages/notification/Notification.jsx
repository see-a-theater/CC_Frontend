import HomeIconMenu from '@/components/HomeIconMenu';
import Hamburger from '@/components/Hamburger';
import NotiComponent from '@/components/Notification/NotiComponent';

import styled from 'styled-components';

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

	return (
		<>
			<Mobile>
				<Hamburger back={true} title={'알림'} noIcon={true} />
				<NotiComponent data={mock_noti} />
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