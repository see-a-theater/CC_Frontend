import styled from 'styled-components';

import CClogoBlack from '@/assets/icons/CClogoBlack.svg?react';
import Github from '@/assets/icons/github.png';
import Kakao from '@/assets/icons/kakaotalk.png';
import Instagram from '@/assets/icons/instagram.svg?react';

function Footer() {
	return (
		<FooterWrapper>
			<Left>
				<div className="logoArea">
					<CClogoBlack />
					<p>씨어 씨어터</p>
				</div>
				<p>ⓒ 2025. CC All Rights Reserved.</p>
			</Left>
			<Right>
				<img src={Github} className="icons" alt="GitHub" />
				<img src={Kakao} className="icons" alt="Kakao" />
				<Instagram className="icons" />
			</Right>
		</FooterWrapper>
	);
}

export default Footer;

const FooterWrapper = styled.footer`
	width: 100%;
	height: 75px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 19px 134px 19px 159px;
	z-index: 99;

	margin-top: auto;
	background-color: ${({ theme }) => theme.colors.gray200};
	color: ${({ theme }) => theme.colors.gray200};
`;

const Left = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;

	p {
		font-size: ${({ theme }) => theme.font.fontSize.body10};
		font-weight: ${({ theme }) => theme.font.fontWeight.medium};
		color: ${({ theme }) => theme.colors.grayMain};
	}
	.logoArea {
        display:flex;
        align-items: center;
        gap: 4px;
    }
`;

const Right = styled.div`
	display: flex;
	align-items: center;
	gap: 18px;

	.icons {
		width: 16px;
		height: 16px;
	}
`;
