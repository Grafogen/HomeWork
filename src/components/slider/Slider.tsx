import React from 'react';

import {S} from './Slider_Styles'

export const Slider = () => {
    return (
        <S.Slider>
            <S.Slide>
                <S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</S.Text>
                <S.Name>@roma ivanowskiy</S.Name>
            </S.Slide>
            <S.Pagination>
                <span> </span>
                <span className={'active'}> </span>
                <span> </span>
            </S.Pagination>
        </S.Slider>
    );
};

// type SlidePropsType = {
//     text: string
//     userName: string
// }
//
// const Slide = (props: SlidePropsType) => {
//     return (
//         <S.Slide>
//             <S.Text>{props.text}</S.Text>
//             <S.Name>@{props.userName}</S.Name>
//         </S.Slide>
//     )
// }
//
// const items = [
//     <Slide userName={"ivan ivanow"}
//            text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />,
//     <Slide userName={"piotr petrov"}
//            text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />,
//     <Slide userName={"igor igorev"}
//            text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />,
// ];
//
// export const Slider = () => (
//     <S.Slider>
//         <AliceCarousel
//             mouseTracking
//             items={items}
//         />
//     </S.Slider>
//
// );

