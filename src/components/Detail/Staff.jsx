import styled from 'styled-components';

function Staff(props) {
	console.log(props);

	return (
		<Container>
			<p className="role">{props?.role}</p>
			<p className="name">{props?.name}</p>
		</Container>
	);
}

export default Staff;

const Container = styled.div`
	display: flex;

	.role {
		width: 86px;
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-weight: ${({ theme }) => theme.font.fontWeight.extraBold};
		color: ${({ theme }) => theme.colors.gray400};
	}
	.name {
		font-size: ${({ theme }) => theme.font.fontSize.body14};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		color: ${({ theme }) => theme.colors.grayMain};
	}
`;
