import styled from 'styled-components';

function Masonry(props) {
	return (
		<>
			<ImageArea>
				{props.imageData?.map((data, idx) => (
					<Item key={idx}>
						<img src={data?.src} alt="공연사진" className="pic" />
						<p>{data?.text}</p>
					</Item>
				))}
			</ImageArea>
		</>
	);
}

export default Masonry;

const ImageArea = styled.div`
	column-width: 176px;
	column-gap: 11px;
`;

const Item = styled.div`
	break-inside: avoid;
	margin-bottom: 8px;
	display: inline-block;
	width: 100%;

	.pic {
		width: 100%;
		height: auto;
		border-radius: 3px;
		object-fit: unset;
		display: block;
	}
	p {
		margin-top: 2px;
		font-size: ${({ theme }) => theme.font.fontSize.body13};
		color: ${({ theme }) => theme.colors.gray700};
	}
`;
