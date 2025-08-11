import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function WebListCard({ name, posterImageUrl, place, schedule, amateurShowId }) {
	const navigate = useNavigate();
	const goDetail = () => {
		navigate(`detail/${amateurShowId}`);
		window.scrollTo(0, 0);
	};

	return (
		<Box>
			<img
				src={posterImageUrl}
				alt="포스터 이미지"
				className="poster"
				onClick={goDetail}
			/>
			<p className="title">{name}</p>
			<p className="place">{place}</p>
			<p className="date">
				{schedule
					? (() => {
							const parts = schedule.split('~');
							const before = parts[0]?.trim() ?? '';
							const after = parts[1]?.trim() ?? '';
							return (
								<>
									{before}
									{after && (
										<>
											{' ~'}
											<br />
											{after}
										</>
									)}
								</>
							);
						})()
					: '날짜 정보 없음'}
			</p>
		</Box>
	);
}

export default WebListCard;

const Box = styled.div`
	.poster {
		width: 228.571px;
		height: 320px;
		object-fit: cover;
		border-radius: 5px;
		margin-bottom: 20px;
	}

	.title {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.headline20};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		margin-bottom: 12px;
	}
	.place {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		margin-bottom: 8px;
	}
	.date {
		color: ${({ theme }) => theme.colors.gray400};
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	}
`;
