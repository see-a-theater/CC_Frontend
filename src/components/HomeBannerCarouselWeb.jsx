import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import Poster from '../assets/images/test-poster2.png';

/*배너 넘어갈 때 border-radius 깜빡거리는 오류 있음 */

function HomeBannerCarouselWeb() {
	const banners = [
		{
			id: 1,
			imgSrc: Poster, // 이미지 경로 (필요하면 각각 다른 이미지도 넣으세요)
			title: '실종',
			location: '홍익대학교 학생회관 3층 소극장',
			date: '2024.10.03 (목) 19:00',
		},
		{
			id: 2,
			imgSrc: Poster,
			title: '공연2',
			location: '장소2',
			date: '2024.11.15 (금) 20:00',
		},
		{
			id: 3,
			imgSrc: Poster,
			title: '공연3',
			location: '장소3',
			date: '2024.12.01 (일) 18:30',
		},
	];
	let sliderRef = useRef(null);
	const play = () => {
		sliderRef.slickPlay();
	};
	const pause = () => {
		sliderRef.slickPause();
	};
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
	};
	return (
		<Wrapper>
			<div className="slider-container">
				<Slider ref={sliderRef} {...settings}>
					{banners.map((banner) => (
						<Banner key={banner.id}>
							<img src={banner.imgSrc} alt={banner.title} />
							<Text>
								<p className="title">{banner.title}</p>
								<p>{banner.location}</p>
								<p>{banner.date}</p>
							</Text>
						</Banner>
					))}
				</Slider>
			</div>
		</Wrapper>
	);
}
export default HomeBannerCarouselWeb;

const Wrapper = styled.div`
	.slider-container {
		height: 280px;
		max-width: 1180px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 5px;
	}
	.slick-initialized {
		height: 280px;
		background: gainsboro;
		border-radius: 5px;
	}
	.slick-arrow {
		width: 530px;
		height: 280px;
		opacity: 0;
	}
	.slick-dots {
		bottom: 20px;
		text-align: left;
		left: 80px;
	}
	li button::before {
		color: ${({ theme }) => theme.colors.gray400};
		opacity: 100% !important;
	}

	.slick-active button::before {
		content: '•'; /* 또는 ""이라도 있어야 함 */
		color: white !important;
		opacity: 100% !important;
	}
`;

const Banner = styled.div`
	position: relative; /* ::before 절대위치 기준 */
	width: 100%;
	height: 280px;
	overflow: hidden;
	border-radius: 5px; /* 여기 둥근 모서리 */

	img {
		width: 100%;
		height: auto;
		display: block;
		border-radius: 5px; /* 이미지도 둥글게 */
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		/* 여기에 리니어 그라데이션 넣으면 됩니다 */
		background: linear-gradient(
			90deg,
			rgba(0, 0, 0, 0.5) 11.8%,
			rgba(0, 0, 0, 0) 36.56%
		);
		border-radius: 5px; /* 그라데이션도 둥글게 */
		pointer-events: none;
	}
`;
const Text = styled.div`
	position: absolute;
	bottom: 40px; /* 원하는 위치로 조정 */
	left: 80px;
	color: white;
	display: flex;
	flex-direction: column;
	gap: 12px;
	z-index: 2; /* ::before보다 위에 위치하도록 */
	pointer-events: none; /* 텍스트 클릭 이벤트는 막음 */

	.title {
		color: var(--color-gray-white, #fff);

		/* Web-app/headline-36-extrabold */
		font-family: 'NanumSquare Neo OTF';
		font-size: 36px;
		font-style: normal;
		font-weight: 800;
		line-height: normal;
		letter-spacing: -1.08px;
		margin-bottom: 12px;
	}
	p {
		color: var(--color-gray-white, #fff);

		/* Web-app/title-16-bold */
		font-family: 'NanumSquare Neo OTF';
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: -0.48px;
	}
`;
