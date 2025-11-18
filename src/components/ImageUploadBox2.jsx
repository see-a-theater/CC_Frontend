import { useRef, useState } from 'react';
import styled from 'styled-components';
import Camera from '@/assets/icons/Camera.svg?react';

function ImageUploadBox({ size, webSize, round, onFileSelect  }) {
	const fileInputRef = useRef(null);
	const [previewUrl, setPreviewUrl] = useState(null);

	const handleClick = () => {
		fileInputRef.current.click();
	};

	const handleChange = (e) => {
		const file = e.target.files[0];
		if (file && file.type.startsWith('image/')) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreviewUrl(reader.result);
			};
			reader.readAsDataURL(file);

            if (onFileSelect) {
				onFileSelect(file);
			}
		}
	};

	return (
		<>
			<Box
				size={size}
				webSize={webSize}
				round={round}
				onClick={handleClick}
				role="button"
			>
				{previewUrl ? (
					<Preview src={previewUrl} alt="uploaded preview" />
				) : (
					<Camera />
				)}
			</Box>
			<input
				type="file"
				accept="image/*"
				style={{ display: 'none' }}
				ref={fileInputRef}
				onChange={handleChange}
			/>
		</>
	);
}

export default ImageUploadBox;

const Box = styled.div`
	background: ${({ theme }) => theme.colors.gray200};
	width: ${(props) => props.size || '150px'};
	height: ${(props) => props.size || '150px'};
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	overflow: hidden;

	border-radius: ${(props) => (props.round ? '50% 50% 10% 50%' : '8px')};

	@media (min-width: 768px) {
		width: ${(props) => props.webSize || props.size || '240px'};
		height: ${(props) => props.webSize || props.size || '240px'};
	}

	img {
		width: 100%;
	}
`;

const Preview = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
