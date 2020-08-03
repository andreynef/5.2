// import React from 'react';
// import {starWars, uniqueNamesGenerator} from "unique-names-generator";
//
// // const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
// //
// // const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); // big_red_donkey
// //
// // const shortName = uniqueNamesGenerator({
// //   dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
// //   length: 2
// // }); // big-donkey
//
//
// interface IStarWarsNameClassState {
//   name: string;
//   count: number;
// }
//
// export class StarWarsNameClass extends React.PureComponent<{}, IStarWarsNameClassState> {
//   state: Readonly<IStarWarsNameClassState> = { name: this.randomName(), count: 0}; //READONLY!
//
//   // constructor(props:{}) {
//   //   super(props);
//   //   this.state = { name: '123'};
//   // }
//
//   public render() {
//     return (
//       <section>
//         <span>{this.state.name}</span>
//         <div/>
//         <button> I need a name!</button>
//       </section>
//     );
//   }
//
//   private handleClick = () => {
//     this.setState({name: this.randomName()});
//     // this.setState({count: this.state.count + 1});// WRONG!
//     console.log('>>', this.state.count);
//     this.setState((state, props) => ({count: state.count + 1}), () => {console.log('>>', this.state.count);});
//   };
//
//   private randomName(): string {
//     return uniqueNamesGenerator({dictionaries:[starWars], length: 1})
//   }
// }