import styled from 'styled-components';

function MasonryWeb({ imageData }) {
	return (
		<ImageArea>
			{imageData?.map((data, idx) => (
				<Item key={idx}>
					<img src={data?.src} alt="공연사진" className="pic" />
					<Text>
						<p className="title">{data?.text}</p>
						{data.theatre && <p className="theatre">{data.theatre}</p>}
					</Text>
				</Item>
			))}
		</ImageArea>
	);
}

export default MasonryWeb;

const ImageArea = styled.div`
	column-count: 4;
	column-gap: 24px;
`;

const Item = styled.div`
	break-inside: avoid;
	margin-bottom: 32px;
	width: 100%;
	display: inline-block;

	.pic {
		width: 100%;
		border-radius: 5px;
		display: block;
	}
`;

const Text = styled.div`
	display: flex;
	gap: 12px;
	align-items: center;
	margin-top: 8px;

	.title {
		font-size: ${({ theme }) => theme.font.fontSize.body16};
		font-weight: ${({ theme }) => theme.font.fontWeight.bold};
		color: ${({ theme }) => theme.colors.grayMain};
	}
	.theatre {
		font-size: ${({ theme }) => theme.font.fontSize.body10};
		color: ${({ theme }) => theme.colors.gray400};
		font-weight: ${({ theme }) => theme.font.fontWeight.regular};
	}
`;
