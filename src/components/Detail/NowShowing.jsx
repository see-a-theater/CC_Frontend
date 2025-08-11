import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function NowShowing({ name, posterImageUrl, place, schedule, amateurShowId }) {
	const navigate = useNavigate();
	const goDetail = () => {
		navigate(`detail/${amateurShowId}`);
		window.scrollTo(0, 0);
	};
	return (
		<Container>
			<img
				src={posterImageUrl}
				alt="포스터"
				className="poster"
				onClick={goDetail}
			/>
			<TextArea>
				<h3 className="Title">{name}</h3>
				<p className="Location">{place}</p>
				<p className="Date">
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
			</TextArea>
		</Container>
	);
}

export default NowShowing;

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	gap: 24px;
	align-items: center;

	.poster {
		width: 114px;
		height: 160px;
		object-fit: cover;
		border-radius: 3px;
	}
`;
const TextArea = styled.div`
	.Title {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};

		margin-bottom: 45px;
	}
	.Location {
		color: ${({ theme }) => theme.colors.grayMain};
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};

		margin-bottom: 12px;
	}
	.Date {
		color: ${({ theme }) => theme.colors.gray400};
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-weight: ${({ theme }) => theme.font.fontWeight.normal};
	}
`;
