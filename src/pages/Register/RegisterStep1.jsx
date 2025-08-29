import styled from 'styled-components';
import { RegisterWrapper } from './Register.style.js';
import ImageUploadBox from '@/components/ImageUploadBox.jsx';
import Counter from '@/components/Counter.jsx';
import DateInput from '@/components/DateInput.jsx';
import UnitInput from '@/components/UnitInput.jsx';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect } from 'react';
function RegisterStep1() {
	const [formDataChanged, setFormDataChanged] = useState(false);
	const [roundCount, setRoundCount] = useState(1);
	const { nextStep } = useOutletContext();

	// 폼 데이터
	const { formData, setFormData } = useOutletContext();

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
		} else {
			// 일반 필드 업데이트
			setFormData((prev) => ({
				...prev,
				[name]: value,
			}));
		}
		setFormDataChanged(true);
		console.log(formData);
	};
	// 할인 항목 추가
	const handleAddTicket = () => {
		setFormData((prev) => ({
			...prev,
			tickets: [...prev.tickets, { discountName: '', price: '' }],
		}));
		setFormDataChanged(true);
	};

	// 할인 항목 삭제
	const handleRemoveTicket = (index) => {
		setFormData((prev) => {
			const updatedTickets = prev.tickets.filter((_, i) => i !== index);
			return { ...prev, tickets: updatedTickets };
		});
	};

	const handlePosterUpload = (fileInfo) => {
		console.log('포스터 파일정보', fileInfo);
		// fileInfo는 { keyName: "...", imageUrl: "..." } 형태라고 가정
		setFormData((prev) => ({
			...prev,
			posterImageUrl: fileInfo?.publicUrl,
		}));
		console.log('포스터 등록 확인', formData);
		setFormDataChanged(true);
	};

	const handleRoundChange = (index, field, value) => {
		setFormData((prev) => {
			const updatedRounds = [...prev.rounds];
			if (!updatedRounds[index]) {
				updatedRounds[index] = { roundNumber: index + 1 };
			}
			updatedRounds[index][field] = value;
			return { ...prev, rounds: updatedRounds };
		});
		setFormDataChanged(true);
	};
	const handleNextStep = () => {
		localStorage.setItem('formData', JSON.stringify(formData));
		nextStep();
	};
	const changedRef = useRef(false);
	const formDataRef = useRef(formData);

	useEffect(() => {
		changedRef.current = formDataChanged;
		formDataRef.current = formData;
	}, [formDataChanged, formData]);
	useEffect(() => {
		const interval = setInterval(() => {
			if (formDataChanged) {
				localStorage.setItem('formData', JSON.stringify(formData));
				setFormDataChanged(false);
				console.log('데이터 저장');
			}
		}, 6000); // 60초

		return () => clearInterval(interval);
	}, [formDataChanged]);

	return (
		<RegisterWrapper>
			<form>
				<h1>기본 정보</h1>
				<div>
					<label style={{ marginBottom: '6px' }}>포스터 썸네일</label>
					<p style={{ marginBottom: '12px' }}>한장만 등록 가능합니다.</p>
					<ImageUploadBox
						onUploadSuccess={handlePosterUpload}
						webHeight="320px"
						webWidth="228px"
						value={formData.posterImageUrl}
					/>
					<p>{formData.posterImageUrl}</p>
				</div>
				<div>
					<label>공연 이름</label>
					<input
						type="text"
						name="name"
						placeholder="등록할 공연의 이름을 입력하세요"
						value={formData.name}
						onChange={handleInputChange}
						className="input-text"
					/>
				</div>
				<div>
					<label>등록 기관 (api에 관련 변수명x) </label>
					<input
						className="input-text"
						type="text"
						name="performerName"
						placeholder="등록하는 기관(공연진)의 이름을 입력하세요"
						value={formData.performerName}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>줄거리</label>
					<textarea
						type="text"
						name="summary"
						placeholder="공연의 줄거리를 입력하세요 (1,000자 이하)"
						value={formData.summary}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>해시태그</label>
					<input
						className="input-text"
						type="text"
						name="hashtag"
						placeholder="예) #뮤지컬 #드라마"
						value={formData.hashtag}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>공연장 주소</label>
					<input
						className="input-text"
						type="text"
						name="roadAddress"
						placeholder="지번, 도로명, 건물명으로 검색해주세요"
						value={formData.roadAddress}
						onChange={handleInputChange}
					/>
					<input
						className="input-text"
						type="text"
						name="detailAddress"
						placeholder="상세주소를 입력해주세요 (상세주소 입력폼은 주소api 연결 후 처리 예정)"
						value={formData.detailAddress}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>공연 회차</label>
					<Counter count={roundCount} setCount={setRoundCount} />
				</div>
				<div>
					<label>공연 일정 & 티켓 수</label>

					{Array.from({ length: roundCount }, (_, index) => (
						<div key={index}>
							<p>{index + 1}회차</p>
							<UnitInput
								type="text"
								name={`ticketCount-${index}`}
								// value는 formData.rounds 배열에서 가져오기
								value={formData.rounds?.[index]?.totalTicket || ''}
								onChange={(e) =>
									handleRoundChange(index, 'totalTicket', e.target.value)
								}
								unit="장"
							/>
							<div>
								<DateInput
									type="text"
									name={`round-${index}`}
									// value는 formData.rounds 배열에서 가져오기
									value={formData.rounds?.[index]?.performanceDateTime || ''}
									onChange={(value) =>
										handleRoundChange(index, 'performanceDateTime', value)
									}
								/>
							</div>
						</div>
					))}
				</div>
				<div>
					<label>러닝타임</label>
					<UnitInput
						type="text"
						name="runtime"
						value={formData.runtime}
						onChange={handleInputChange}
						placeholder="공연이 진행되는 시간을 입력해주세요 (분 단위)"
						unit="분"
					/>
				</div>
				<div>
					<label>일반 예매</label>

					<UnitInput
						type="text"
						name="price"
						value={formData.tickets.price}
						onChange={handleInputChange}
						placeholder="가격을 입력해주세요"
						unit="원"
					/>
				</div>
				<div>
					<label>할인</label>
					<InputRow>
						<p>할인명</p>
						<p>가격</p>
					</InputRow>

					{formData.tickets.map((ticket, idx) => (
						<InputRow key={idx}>
							<input
								className="input-text"
								type="text"
								placeholder="할인명을 입력해주세요"
								name={`tickets.${idx}.discountName`} // key 경로
								value={ticket.discountName}
								onChange={handleInputChange}
							/>
							<UnitInput
								placeholder="가격을 입력해주세요"
								unit="원"
								name={`tickets.${idx}.price`}
								value={ticket.price}
								onChange={handleInputChange}
							/>
							<button type="button" onClick={() => handleRemoveTicket(idx)}>
								X
							</button>
						</InputRow>
					))}

					<button type="button" className="btn-add" onClick={handleAddTicket}>
						+ 추가하기
					</button>
				</div>

				<div>
					<label>계좌번호</label>
					<p>은행</p>
					<input
						className="input-text"
						type="text"
						placeholder="은행명을 입력해주세요"
						name="bankName" // key 경로
						value={formData.bankName}
						onChange={handleInputChange}
					/>
					<p>계좌번호</p>
					<input
						className="input-text"
						type="text"
						placeholder="(-) 제외한 계좌번호를 입력해주세요"
						name="account" // key 경로
						value={formData.account}
						onChange={handleInputChange}
					/>
					<p>입금자명</p>
					<input
						className="input-text"
						type="text"
						placeholder="입금자명을 써주세요"
						name="depositor"
						value={formData.depositor}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>연락처</label>
					<input
						className="input-text"
						type="text"
						placeholder="문의에 쓰일 SNS나 연락처를 입력해주세요"
						name="contact"
						value={formData.contact}
						onChange={handleInputChange}
					/>
				</div>
			</form>
			<ButtonWrapper>
				<button
					style={{ marginTop: '44px', minWidth: '140px' }}
					type="submit"
					className="btn-primary"
					onClick={() => handleNextStep()}
				>
					다음
				</button>
				<button
					className="save"
					type="button"
					onClick={() =>
						localStorage.setItem('formData', JSON.stringify(formData))
					}
				>
					저장하기
				</button>
				<button
					className="save"
					type="button"
					onClick={() => {
						const saved = localStorage.getItem('formData');
						if (saved) {
							setFormData(JSON.parse(saved));
						} else {
							alert('저장된 데이터가 없습니다.');
						}
					}}
				>
					불러오기
				</button>
			</ButtonWrapper>
		</RegisterWrapper>
	);
}

export default RegisterStep1;

const InputsWrapper = styled.div`
	display: flex;
`;
const InputRow = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 0.1fr;
	gap: 12px;
`;
const ButtonWrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	gap: 10px;
	button {
		display: flex;
		width: 100%;
	}
	.save {
		color: red;
		font-size: 14px;
		text-decoration: underline;
	}
`;
