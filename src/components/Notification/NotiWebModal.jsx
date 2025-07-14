import styled from 'styled-components';
import NotiComponent from '@/components/Notification/NotiComponent';

import CloseIcon from '@/assets/icons/close.svg?react';

function NotiWebModal({ onClose }) {
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
		<Overlay onClick={onClose}>
			<ModalBox onClick={(e) => e.stopPropagation()}>
				<Header>
					<CloseIcon onClick={onClose} width={20} />
					<h2>알림</h2>
				</Header>

				<NotiComponent data={mock_noti} />
			</ModalBox>
		</Overlay>
	);
}

export default NotiWebModal;

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: transparent;
	z-index: 2000;

	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
`;

const ModalBox = styled.div`
	margin: 60px 0 0 112px;
	width: 748px;
	max-height: 1018px;

	background-color: ${({ theme }) => theme.colors.grayWhite};
	border-radius: 0px 5px 5px 5px;
	overflow-y: auto;
	box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);
`;

const Header = styled.div`
	padding: 30px 48px 16px 48px;

	display: flex;
	gap: 12px;
	align-items: center;

	h2 {
		font-size: ${({ theme }) => theme.font.fontSize.headline24};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		color: ${({ theme }) => theme.colors.grayMain};
	}
`;
