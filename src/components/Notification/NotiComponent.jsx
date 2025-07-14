import styled from 'styled-components';
import Noti from '@/components/Notification/Noti';

import PillToggleGroup from '@/components/PillToggleGroup';

function NotiComponent(props) {
	const options = ['전체', '소극장 공연', '추천 공연'];

	return (
		<Box>
			<Toggle>
				<PillToggleGroup options={options} />
			</Toggle>

			<NotiList>
				{props?.data.map((noti, idx) => (
					<Noti
						key={idx}
						type={noti.type}
						category={noti.category}
						content={noti.content}
						when={noti.when}
						checked={noti.checked}
					/>
				))}
			</NotiList>
		</Box>
	);
}

export default NotiComponent;

const Box = styled.div`
	@media (min-width: 768px) {
		width: 100%;
		//max-height: 1018px;

		background-color: ${({ theme }) => theme.colors.grayWhite};
		border-radius: 0px 5px 5px 5px;
		overflow-y: auto;
	}
`;

const Header = styled.div`
	@media (min-width: 768px) {
		padding: 30px 48px 16px 48px;

		display: flex;
		gap: 12px;
		align-items: center;

		h2 {
			font-size: ${({ theme }) => theme.font.fontSize.headline24};
			font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
			color: ${({ theme }) => theme.colors.grayMain};
		}
	}
`;

const Toggle = styled.div`
	padding: 20px 20px;
	display: flex;
	gap: 15px;

	font-size: ${({ theme }) => theme.font.fontSize.body14};
	font-weight: ${({ theme }) => theme.font.fontWeight.normal};

	@media (min-width: 768px) {
		padding: 16px 48px 40px 48px;
		display: flex;
		gap: 12px;
		font-size: ${({ theme }) => theme.font.fontSize.title16};
	}
`;

const NotiList = styled.div`
	display: flex;
	flex-direction: column;

    gap: 2px;

    @media (min-width: 768px) 
        gap: 0px;
	}	
`;
