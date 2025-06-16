import Camera from '../assets/icons/Camera.svg';
import styled from 'styled-components';
function ImageUploadBox({ size, webSize, round }) {
	return (
		<Box size={size} webSize={webSize} round={round}>
			<img src={Camera} />
		</Box>
	);
}

export default ImageUploadBox;

const Box = styled.div`
	background: ${({ theme }) => theme.colors.gray200};
	width: ${(props) => (props.size ? props.size : '150px')};
	height: ${(props) => (props.size ? props.size : '150px')};
	display: flex;
	justify-content: center;
	align-items: center;
	@media (min-width: 768px) {
		width: ${(props) => props.webSize || props.size || '240px'};
		height: ${(props) => props.webSize || props.size || '240px'};
	}
	img {
		width: 20px;
	}
	border-radius: ${(props) => (props.round ? '50% 50% 10% 50%' : '')};
`;
