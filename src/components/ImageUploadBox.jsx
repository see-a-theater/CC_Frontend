import React, { useState } from 'react';
import Camera from '@/assets/icons/Camera.svg';
import styled from 'styled-components';
import axios from 'axios';

function ImageUploadBox({
	width,
	height,
	webWidth,
	webHeight,
	round,
	onUploadSuccess,
}) {
	const [imageSrc, setImageSrc] = useState(null);

	const handleImageChange = async (e) => {
		const file = e.target.files[0];
		if (!file) return;

		// 미리보기
		const reader = new FileReader();
		reader.onloadend = () => {
			setImageSrc(reader.result);
		};
		reader.readAsDataURL(file);

		try {
			// 1) presigned URL 요청
			const res = await axios.get(
				'https://api.seeatheater.site/upload/s3/presignedUrl?imageExtension=png&filePath=amateurShow',
				{
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_ACCESS_TOKEN}`,
					},
				},
			);
			console.log('요청한 url', res.data);

			const { uploadUrl, publicUrl, keyName } = res.data;
			// presigned URL은 key만 내려오니까 S3 도메인 붙여주기

			const FullUploadUrl = `https://ccbucket-0528.s3.ap-northeast-2.amazonaws.com/${uploadUrl}`;
			// 2) File → ArrayBuffer 변환
			const arrayBuffer = await file.arrayBuffer();

			// 2) S3로 직접 업로드
			await axios.put(FullUploadUrl, arrayBuffer, {
				headers: {
					'x-amz-meta-content-type': 'image/png',
					'x-amz-meta-filetype': 'image/png',
				},
			});

			// 3) 부모(RegisterStep1)로 전달 → formData.posterImageRequestDTO에 저장
			if (onUploadSuccess) {
				onUploadSuccess({ keyName, publicUrl });
			}
		} catch (err) {
			console.error('이미지 업로드 실패:', err);
		}
	};
	return (
		<Box
			width={width}
			height={height}
			webWidth={webWidth}
			webHeight={webHeight}
			round={round}
		>
			{imageSrc ? (
				<img src={imageSrc} alt="uploaded" />
			) : (
				<>
					<IconWrapper>
						<img src={Camera} alt="camera icon" />
					</IconWrapper>
				</>
			)}
			<input type="file" accept="image/*" onChange={handleImageChange} />
		</Box>
	);
}

export default ImageUploadBox;

const Box = styled.div`
	position: relative;
	background: ${({ theme }) => theme.colors.gray200};
	width: ${(props) => (props.width ? props.width : '150px')};
	height: ${(props) => (props.height ? props.height : '150px')};
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	overflow: hidden;
	${(props) => (props.round ? 'border-radius: 50% 50% 10% 50%;' : '')};
	@media (min-width: 768px) {
		width: ${(props) => props.webWidth || props.webWidth || '240px'};
		height: ${(props) => props.webHeight || props.webHeight || '240px'};
		width: ${(props) => props.webWidth || props.webWidth || '240px'};
		height: ${(props) => props.webHeight || props.webHeight || '240px'};
	}

	img {
		width: 20px;
		height: 20px;
		object-fit: cover;
	}

	input[type='file'] {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		cursor: pointer;
	}

	img {
		width: 100%;
		height: 100%;
	}
`;

const IconWrapper = styled.div`
	@media (min-width: 768px) {
		width: 40px;
		height: 40px;
	}
`;
