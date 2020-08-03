// import {preventDefault} from "./preventDefault";
// import {stopPropagation} from "./stopPropagation";
//
// function NotStandardLink(props: any) {
//   // const handleClick = (e:React.SyntheticEvent<HTMLAnchorElement>) => {//ручной старый вариант
//   //   e.stopPropagation();
//   //   e.preventDefault();
//   //   props.onClick();
//   // }
//   return (
//     <a href={"#"} onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
//     // <a onClick={preventAll(props.onClick)}>Hello</a>
//   )
// }