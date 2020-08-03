"use strict";
// import React from 'react';
// import {starWars, uniqueNamesGenerator} from "unique-names-generator";
//
//
// interface INameState {
//   adjective: string;
//   starWarsWord: string;
// }
//
// export class Names extends React.Component<{}, INameState> {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       adjective: this.generateWord(adjectives),
//       starWarsWord: this.generateWord(starWars),
//     }
//   }
//
//   public componentDidMount(): void {
//     const interval = setInterval(() => {
//       this.setState({adjective: this.generateWord(adjectives)});
//     }, 2000);
//
//     setTimeout(() => {
//       clearInterval(interval)
//     }, 6000);
//   }
//
//   public render() {
//     return (
//       <h1>
//         <Adjective adjective={this.state.adjective}/>
//         {'\u00A0'}
//         <StarWarsWord starWarsWord={this.state.starWarsWord}/>
//       </h1>
//     );
//   }
//
//   private generateWord(dictionary: string[]): string {
//     const defaultGeneratorConfig: Config = {
//       length: 1,
//       dictionaries: []
//     };
//
//     return uniqueNamesGenerator(Object.assign(
//       {},
//       defaultGeneratorConfig,
//       {dictionaries: [dictionary]}
//     ))
//   }
// }
// //------------------------------------------------------------------------------------------------------------
// interface IFirstNameProps {
//   adjective: string;
// }
//
// class Adjective extends React.Component<IFirstNameProps> {
//   render(){
//     console.log('--------');
//     console.log('Adj is printing');
//     return <span>{this.props.adjective}</span>;
//   }
// }
//
// interface ILastNameProps {
//   starWarsWord: string;
// }
//
// class StarWarsWord extends React.Component<ILastNameProps> {
//   render(){
//     console.log('SW is printing');
//     return <span>{this.props.starWarsWord}</span>;
//   }
// }
//# sourceMappingURL=Names.js.map