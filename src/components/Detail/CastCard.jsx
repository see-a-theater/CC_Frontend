import styled from 'styled-components';

function CastCard(props) {
	console.log(props);
	return (
		<Card>
			<img src={props?.path} alt="profile pic" className="profile" />
			<p className="name">{props?.name}</p>
			<p className="role">{props?.role}</p>
		</Card>
	);
}

export default CastCard;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

	.profile {
		width: 100px;
		aspect-ratio: 1 / 1;
		object-fit: cover;

		border-radius: 80px 80px 10px 80px;
	}
	.name {
		font-size: ${({ theme }) => theme.font.fontSize.body13};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		color: ${({ theme }) => theme.colors.grayMain};
	}
	.role {
		font-size: ${({ theme }) => theme.font.fontSize.body13};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		color: ${({ theme }) => theme.colors.gray400};
	}
`;
