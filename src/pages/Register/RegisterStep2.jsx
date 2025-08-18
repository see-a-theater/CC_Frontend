import ImageUploadBox from '../../components/ImageUploadBox.jsx';
import { RegisterWrapper } from './Register.style.js';
import { useOutletContext } from 'react-router-dom';
function RegisterStep2() {
	const { nextStep, formData, setFormData } = useOutletContext();
	const handleInputChange = (e) => {
		const { name, value } = e.target;

		// tickets 배열 업데이트 처리
		if (name.startsWith('tickets.')) {
			const [_, index, field] = name.split('.'); // ["tickets", "0", "discountName"]
			setFormData((prev) => {
				const updatedTickets = [...prev.tickets];
				updatedTickets[Number(index)][field] = value;
				return { ...prev, tickets: updatedTickets };
			});
		} else if (name.includes('.')) {
			const keys = name.split('.'); // ['notice', 'timeInfo']

			setFormData((prev) => {
				return {
					...prev,
					[keys[0]]: {
						...prev[keys[0]],
						[keys[1]]: value,
					},
				};
			});
		} else {
			// 일반 필드 업데이트
			setFormData((prev) => ({
				...prev,
				[name]: value,
			}));
		}
		console.log(formData);
	};
	return (
		<RegisterWrapper>
			<form>
				<h1>공연 정보</h1>
				<div>
					<label>공연시간 정보</label>
					<textarea
						name="notice.timeInfo"
						placeholder="예매 가능 시간이나 공연 시간에 대해 입력하세요 (1,000자 이하) 
예) 공연 관람 3시간 전까지 예매 가능"
						value={formData.notice.timeInfo}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>공지사항</label>
					<textarea
						name="notice.content"
						placeholder="예) 예매시에 공연 관리자가 안내하는 입금계좌로 입금하시고,
공연 관리자의 입금 확인을 통해 티켓 예매 확인을 받을 수 
있습니다. 공연 관리자가 입금을 확인해야 하므로 티켓 확인까지 
시간이 걸릴 수 있습니다."
						value={formData.notice.content}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label style={{ marginBottom: '6px' }}>공연 상세 이미지</label>
					<p>(선택사항)</p>
					<ImageUploadBox />
				</div>
				<div>
					<label style={{ marginBottom: '6px' }}>공연장 사진</label>
					<p>(사진을 등록하면 자동으로 시야확인에 추가됩니다.)</p>
					<ImageUploadBox />
				</div>
			</form>
			<button
				style={{ marginTop: '44px' }}
				type="submit"
				className="btn-primary"
				onClick={nextStep}
			>
				다음
			</button>
		</RegisterWrapper>
	);
}

export default RegisterStep2;
