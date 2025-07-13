import styled from 'styled-components';

import Camera from '@/assets/icons/Camera.svg?react';

function AddCastCard() {
	return (
		<Card>
			<UploadArea>
				<CameraIcon />
			</UploadArea>
			<Input type="text" placeholder="이름" />
			<Input type="text" placeholder="역할" />
		</Card>
	);
}

export default AddCastCard;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 140px;
`;

const UploadArea = styled.div`
	width: 140px;
	aspect-ratio: 1 / 1;
	background-color: ${({ theme }) => theme.colors.gray200};
	border-radius: 80px 80px 10px 80px;

	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

const CameraIcon = styled(Camera)`
	width: 24px;
	height: 24px;
	color: ${({ theme }) => theme.colors.grayWhite};
`;

const Input = styled.input`
	margin-top: 8px;
	width: 100%;
	padding: 4px 6px;
	font-size: ${({ theme }) => theme.font.fontSize.title16};
	font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	color: ${({ theme }) => theme.colors.grayMain};
    border: none;
	border-bottom: 1px solid #E6E6E6;
	border-radius: 4px;
	background-color: ${({ theme }) => theme.colors.gray100};

	&::placeholder {
		color: ${({ theme }) => theme.colors.gray500};
	}
`;
