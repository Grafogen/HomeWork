import React from 'react';
import styled from 'styled-components';
import {Link} from '../../../../components/Link';
import {FlexWrapper} from "../../../../components/FlexWrapper";

export const TabMenu = (props:{menuItems:Array<string>}) => {
    return (
        <StyledTabMenu>
            <FlexWrapper align={'center'} direction={'column'}>
                <ul>
                    {props.menuItems.map((item:string ,index:number )=>{
                        return <ListItem key={index}>
                            <Link href=''>{item}</Link>
                        </ListItem>
                    })}
                </ul>
            </FlexWrapper>
        </StyledTabMenu>
    );
};

// export type TabsStatusType = "all" | "landing" | "react" | "spa"
//
// type TabMenuPropsType = {
//     tabsItems: Array<{status: TabsStatusType, title: string}>
//     changeFilterStatus: (value: TabsStatusType) => void
//     currentFilterStatus: string
// }
//
// export const TabMenu = (props: TabMenuPropsType) => {
//     return (
//         <StyledTabMenu>
//             <ul>
//                 {props.tabsItems.map((item, index)=>{
//                     return <ListItem key={index}>
//                         <Link active={props.currentFilterStatus === item.status} as={"button"} onClick={()=>{props.changeFilterStatus(item.status)}}>{item.title}</Link>
//                     </ListItem>
//                 })}
//             </ul>
//         </StyledTabMenu>
//     );
// };

const StyledTabMenu = styled.nav`
  //ul {
  //  display: flex;
  //  justify-content: space-between;
  //  max-width: 352px;
  //  width: 100%;
  //  margin: 0 auto 40px;
  //}
  margin-bottom: 40px;
  ul {
    display: flex;
    gap: 20px;
  }
`
const ListItem = styled.li`

`

