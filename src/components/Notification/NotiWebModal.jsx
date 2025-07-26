import styled from 'styled-components';
import NotiComponent from '@/components/Notification/NotiComponent';
import CloseIcon from '@/assets/icons/close.svg?react';
import { createPortal } from 'react-dom';

function NotiWebModal({ onClose }) {
	return createPortal(
		<Overlay onClick={onClose}>
			<ModalBox onClick={(e) => e.stopPropagation()}>
				<Header>
					<CloseIcon onClick={onClose} width={20} />
					<h2>알림</h2>
				</Header>
				<NotiComponent />
			</ModalBox>
		</Overlay>,
		document.body
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
	z-index: 9999;
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
	position: relative;
	z-index: 10000;
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
