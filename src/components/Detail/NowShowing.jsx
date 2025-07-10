import styled from 'styled-components';

function NowShowing(props) {
	return (
		<Container>
			<img src={props?.data.src} alt="포스터" className="poster" />
			<TextArea>
				<h3 className="Title">{props?.data.title}</h3>
				<p className="Location">{props?.data.place}</p>
				<p className="Date">
					{props?.data?.date
						? (() => {
								const [before, after] = props.data.date.split('~');
								return (
									<>
										{before.trim()} ~<br />
										{after.trim()}
									</>
								);
							})()
						: null}
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
