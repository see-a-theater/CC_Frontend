import { RegisterWrapper } from './Register.style.js';
function RegisterStep4({ onNext }) {
	return (
		<RegisterWrapper>
			<form style={{ height: '100%', justifyContent: 'space-between' }}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
					<h1>참고 사항</h1>
					<ul>
						<li>
							<span>1.</span>
							<p>기본 수수료는 5,000원입니다.</p>
						</li>
						<li>
							<span>2.</span>
							<p>등록 후 관리자가 확인 후 페이지에 올라가게 됩니다.</p>
						</li>
						<li>
							<span>3.</span>
							<p>
								공연이 등록되는데 1일 정도 소요됩니다. 공연 인증되어 공연이
								등록되면 알람이 가며, 마이페이지에서도 확인이 가능합니다.
							</p>
						</li>
					</ul>
				</div>

				<div className="checkbox">
					<label>
						참고사항을 확인하였으며, 이에 동의합니다.
						<input type="checkbox" />
					</label>
				</div>
			</form>
			<button
				style={{ marginTop: '44px' }}
				type="submit"
				className="btn-primary"
				onClick={onNext}
			>
				다음
			</button>
		</RegisterWrapper>
	);
}

export default RegisterStep4;
