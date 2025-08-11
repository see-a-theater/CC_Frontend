export async function uploadImageToS3(file, uploadUrl) {
  const putRes = await fetch(uploadUrl, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
      "x-amz-meta-content-type": "image/jpg",
      "x-amz-meta-filetype": "image/jpng",
    },
    body: file,
  });

  if (!putRes.ok) {
    throw new Error(`S3 업로드 실패: ${putRes.status}`);
  }
}
