import styled from 'styled-components';



function CastCardCheck({ path, name, role, checked, onCheckChange }) {
	return (
		<Card>
			<Checkbox type="checkbox" checked={checked} onChange={onCheckChange} />
			<ImageWrapper>
				<img src={path} alt="profile pic" className="profile" />
			</ImageWrapper>
			<p className="name">{name}</p>
			<p className="role">{role}</p>
		</Card>
	);
}

export default CastCardCheck;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	.name {
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		color: ${({ theme }) => theme.colors.grayMain};
		margin-top: 8px;
	}
	.role {
		font-size: ${({ theme }) => theme.font.fontSize.title16};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		color: ${({ theme }) => theme.colors.gray400};
	}
`;

const ImageWrapper = styled.div`
	position: relative;

	.profile {
		width: 140px;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		border-radius: 80px 80px 10px 80px;
	}
`;

const Checkbox = styled.input`
	position: absolute;
	top: 0px;
	left: 0px;
	width: 16px;
	height: 16px;
	z-index: 1;
`;
