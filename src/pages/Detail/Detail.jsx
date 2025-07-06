//import styled from 'styled-components';

import Summary from './summary';
import Info from './Info';

function Detail() {
	return (
		<>
			{/*스크롤 전 요약 화면*/}
			<Summary />

			{/*스크롤 후 상세 화면*/}
			<Info />
		</>
	);
}

export default Detail;
