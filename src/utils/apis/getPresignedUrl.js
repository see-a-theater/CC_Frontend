export async function getPresignedUrl(imageExtension, filePath) {
  const accessToken = localStorage.getItem("accessToken");

  const url = `https://api.seeatheater.site/upload/s3/presignedUrl?imageExtension=${imageExtension}&filePath=${filePath}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Presigned URL 요청 실패: ${res.status}`);
  }

  const data = await res.json();

  console.log("✅ S3 응답:", data); // 디버깅용

  return {
    uploadUrl: data.url,  
    publicUrl: data.publicUrl, 
    keyName: data.keyName,  
  };
}
