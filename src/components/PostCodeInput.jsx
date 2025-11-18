import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';
import { useState } from 'react';

function PostCodeInput({ value, detailValue, onChange }) {
	const [openPostcode, setOpenPostcode] = useState(false);

	const clickButton = () => {
		setOpenPostcode((current) => !current);
	};

	const selectAddress = (data) => {
		console.log(`
			주소: ${data.address},
			우편번호: ${data.zonecode}
		`);
		onChange({ name: 'roadAddress', value: data.address });
		setOpenPostcode(false);
	};

	return (
		<Wrapper>
			<input
				className="input-text"
				id="address_kakao"
				onClick={clickButton}
				value={value}
				placeholder="지번, 도로명, 건물명으로 검색해주세요"
				readOnly
			/>
			{openPostcode && (
				<DaumPostcode
					onComplete={selectAddress}
					autoClose={false}
					defaultQuery=""
				/>
			)}

			<input
				className="input-text"
				value={detailValue}
				onChange={(e) =>
					onChange({ name: 'detailAddress', value: e.target.value })
				}
				placeholder="상세주소를 입력해주세요"
			/>
		</Wrapper>
	);
}

export default PostCodeInput;

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`;
