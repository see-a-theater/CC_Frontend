import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function PlayCard(props) {
	const ShowId = props?.data.amateurShowId;

	const navigate = useNavigate();
	const goDetail = () => {
		navigate(`detail/${ShowId}`);
		window.scrollTo(0, 0);
	};
	return (
		<Container image={props?.data.posterImageUrl} onClick={goDetail}>
			<Text>
				<h3 className="Title"> {props?.data.name} </h3>
				<p className="Location">{props?.data.place}</p>
				<p className="Date">
					{props?.data?.schedule
						? (() => {
								const [before, after] = props.data.schedule.split('~');
								return (
									<>
										{before.trim()} ~<br />
										{after.trim()}
									</>
								);
							})()
						: null}
				</p>
			</Text>
		</Container>
	);
}

export default PlayCard;

const Container = styled.div`
	width: 100%;
	aspect-ratio: 1 / 1;
	border-radius: 10px;
	padding: 28px;

	position: relative;

	background: ${({ image }) =>
		`linear-gradient(180deg, rgba(0, 0, 0, 0) 25.94%, rgba(0, 0, 0, 0.6) 77.94%),
		url(${image})`};
	background-size: cover;
`;
const Text = styled.div`
	position: absolute;
	left: 28px;
	bottom: 28px;
	color: ${({ theme }) => theme.colors.grayWhite};

	.Title {
		font-size: ${({ theme }) => theme.font.fontSize.headline24};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};

		margin-bottom: 28px;
	}
	.Location {
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};

		margin-bottom: 8px;
	}
	.Date {
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
	}
`;
