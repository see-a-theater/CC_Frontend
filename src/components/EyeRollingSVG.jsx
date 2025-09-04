/* eslint-disable no-unused-vars */

import { motion } from 'framer-motion';

function EyeRollingSVG({ isLoading }) {
	const pupilVariants = {
		loading: {
			x: [-5, -10, -20, -5],
			// x: [0, -5, -10, -15, -20, -15, -10, -5, 0, -5, -10],
			y: [5, -15, 5],
			// y: [0, 5, 0, -5, -10, -15, -10, -5, 0, 5, 0],
			transition: {
				duration: 3,
				ease: 'linear',
				repeat: Infinity,
				repeatType: 'loop',
			},
		},
	};

	return (
		<svg width="120" height="77" viewBox="0 0 120 77" fill="none">
			{/* 왼쪽 눈 */}
			<ellipse
				cx="33.6444"
				cy="38.2599"
				rx="23.6149"
				ry="31.8159"
				transform="rotate(21.5158 33.6444 38.2599)"
				fill="#F67676"
			/>
			{/* 오른쪽 눈 */}
			<ellipse
				cx="86.3709"
				cy="38.2599"
				rx="23.6149"
				ry="31.8159"
				transform="rotate(21.5158 86.3709 38.2599)"
				fill="#F67676"
			/>

			{/* 왼쪽 눈동자 */}
			<motion.ellipse
				cx="45.7739"
				cy="42.6849"
				rx="10.7883"
				ry="14.5871"
				transform="rotate(15.6489 45.7739 42.6849)"
				fill="white"
				animate={isLoading ? 'loading' : false}
				variants={pupilVariants}
			/>

			{/* 오른쪽 눈동자 */}
			<motion.ellipse
				cx="99.1372"
				cy="42.6849"
				rx="10.7883"
				ry="14.5871"
				transform="rotate(15.6489 99.1372 42.6849)"
				fill="white"
				animate={isLoading ? 'loading' : false}
				variants={pupilVariants}
			/>
		</svg>
	);
}

export default EyeRollingSVG;
