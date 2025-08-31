import { useState } from 'react';
import axios from 'axios';

function TestUploadPic() {
	const [extension, setExtension] = useState('jpg');
	const [filePath, setFilePath] = useState('amateurShow');
	const [responseUrl, setResponseUrl] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [file, setFile] = useState(null);
	const [uploadSuccess, setUploadSuccess] = useState(false);
	const [showId, setShowId] = useState(1); // 테스트용 amateurShowId
	const [content, setContent] = useState('테스트 내용');

	const handleRequest = async () => {
		setLoading(true);
		setError(null);
		setResponseUrl(null);
		setUploadSuccess(false);

		try {
			const res = await axios.get(
				'https://api.seeatheater.site/upload/s3/presignedUrl',
				{
					params: {
						imageExtension: extension,
						filePath: filePath,
					},
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_ACCESS_TOKEN}`,
					},
				},
			);
			setResponseUrl(res.data);
		} catch (err) {
			console.error(err);
			setError('에러 발생: ' + err.message);
		} finally {
			setLoading(false);
		}
	};

	const handleFileChange = (e) => {
		const selectedFile = e.target.files[0];
		if (selectedFile) {
			setFile(selectedFile);
			setUploadSuccess(false);
		}
	};

	const handleUpload = async () => {
		if (!file || !responseUrl?.uploadUrl) {
			alert('파일을 선택하고 Presigned URL을 먼저 요청하세요.');
			return;
		}

		try {
			// 1. S3에 PUT 요청 (실제 파일 업로드)
			await axios.put(
				`https://ccbucket-0528.s3.ap-northeast-2.amazonaws.com/${responseUrl.uploadUrl}`,
				file,
				{},
			);

			setUploadSuccess(true);
			console.log(uploadSuccess);
			// 2. 업로드 성공 → 서버에 이미지 정보 등록
			await submitToBackend();
		} catch (err) {
			console.error(err);
			setError('업로드 실패: ' + err.message);
		}
	};

	const submitToBackend = async () => {
		if (!responseUrl?.keyName || !responseUrl?.publicUrl) {
			console.error('Presigned 응답 없음');
			return;
		}

		const payload = {
			amateurShowId: showId,
			content: content,
			imageRequestDTOs: [
				{
					keyName: responseUrl.keyName,
					imageUrl: responseUrl.publicUrl,
				},
			],
		};

		try {
			await axios.post(
				'https://api.seeatheater.site/amateurs/images',
				payload,
				{
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_ACCESS_TOKEN}`,
					},
				},
			);
			alert('✅ 이미지 업로드 및 등록 성공');
		} catch (err) {
			console.error(err);
			setError('백엔드 등록 실패: ' + err.message);
		}
	};

	return (
		<div style={{ padding: '20px' }}>
			<h2>🧪 Presigned URL + 업로드 + 등록 테스트</h2>

			<div style={{ marginBottom: '10px' }}>
				<label>확장자: </label>
				<select
					value={extension}
					onChange={(e) => setExtension(e.target.value)}
				>
					<option value="jpg">jpg</option>
					<option value="jpeg">jpeg</option>
				</select>
			</div>

			<div style={{ marginBottom: '10px' }}>
				<label>파일 경로: </label>
				<select value={filePath} onChange={(e) => setFilePath(e.target.value)}>
					<option value="board">board</option>
					<option value="photoAlbum">photoAlbum</option>
					<option value="amateurShow">amateurShow</option>
				</select>
			</div>

			<div style={{ marginBottom: '10px' }}>
				<label>Show ID: </label>
				<input
					type="number"
					value={showId}
					onChange={(e) => setShowId(Number(e.target.value))}
				/>
			</div>

			<div style={{ marginBottom: '10px' }}>
				<label>Content: </label>
				<input
					type="text"
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
			</div>

			<button onClick={handleRequest} disabled={loading}>
				{loading ? 'URL 요청 중...' : 'Presigned URL 요청'}
			</button>

			{responseUrl && (
				<div style={{ marginTop: '20px' }}>
					<h4>✅ Presigned 응답</h4>
					<p>
						<strong>KeyName:</strong> {responseUrl?.keyName}
					</p>
					<p>
						<strong>PublicUrl:</strong> {responseUrl?.publicUrl}
					</p>
					<p>
						<strong>UploadUrl:</strong> {responseUrl?.uploadUrl}
					</p>
				</div>
			)}

			<hr />
			<h4>📤 파일 업로드</h4>
			<input type="file" accept="image/*" onChange={handleFileChange} />
			<button onClick={handleUpload} style={{ marginLeft: '10px' }}>
				사진 업로드 및 등록
			</button>

			{uploadSuccess && <p style={{ color: 'green' }}>✅ 업로드 완료</p>}
			{error && <p style={{ color: 'red' }}>{error}</p>}
		</div>
	);
}

export default TestUploadPic;
