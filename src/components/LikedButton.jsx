import { useState, useEffect } from 'react';
import useCustomFetch from '@/utils/hooks/useCustomFetch';

import Heart from '@/assets/icons/Heart.svg?react';
import HeartFull from '@/assets/icons/heart-full.svg?react';
import styled from 'styled-components';

function LikedButton({ performerId }) {
	const { fetchData, loading } = useCustomFetch();

	const [liked, setLiked] = useState(false);

	useEffect(() => {
		const checkInitialLike = async () => {
			const res = await fetchData(`/member-like/like/${performerId}`, 'POST');

			if (res?.code === 'LIKE4002') {
				setLiked(true);
				console.log(res);
			}
		};
		checkInitialLike();
	}, [performerId, fetchData]);

	const handleToggleLike = async () => {
		if (!liked) {
			const res = await fetchData(`/member-like/like/${performerId}`, 'POST');
			if (res?.isSuccess || res?.code === 'LIKE4002') {
				setLiked(true);
			}
		} else {
			const res = await fetchData(`/member-like/like/${performerId}`, 'DELETE');
			if (res?.isSuccess) {
				setLiked(false);
			}
		}
	};

	return (
		<Button onClick={handleToggleLike} disabled={loading}>
			{liked ? <HeartFull width={24} /> : <Heart width={24} />}
		</Button>
	);
}

export default LikedButton;

const Button = styled.button`
	display: flex;
	flex-align: center;
`;
