export async function getPresignedUrl(accessToken, imageExtension, filePath) {
	const url = `${import.meta.env.VITE_APP_API_URL}/upload/s3/presignedUrl?imageExtension=${imageExtension}&filePath=${filePath}`;

	const res = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});

	if (!res.ok) {
		throw new Error(`Presigned URL 요청 실패: ${res.status}`);
	}

	const data = await res.json();

	console.log('✅ S3 응답:', data); // 디버깅용

	return {
		uploadUrl: data.url,
		publicUrl: data.publicUrl,
		keyName: data.keyName,
	};
}
