import React from 'react';
const array = [{id: 0, term: 'glosary term 1', description: ' glosary description 1'}, 
{id: 1, term: 'glosary term 2', description: ' glosary description 2'}]
export class Fragment extends React.Component {
    render() {
      return (
        <table>
          <tr>
            <Columns />
            <ColumnsShortSyntax/>
            <Glossary items={array}/>
          </tr>
        </table>
      );
    }
  }

//the problem here is that the div wrapping the <td> elements will break the table when rendered

//   class Columns extends React.Component {
//     render() {
//       return (
//         <div>
//           <td>Hello</td>
//           <td>World</td>
//         </div>
//       );
//     }
//   }

// here the react.fragment acts as a wrapper, but when it is rendered, it will show up as nothing.
//therefore allowing you to render inside the parent react table without issues
  class Columns extends React.Component {
    render() {
      return (
        <React.Fragment>
          <td>Hello</td>
          <td>World</td>
        </React.Fragment>
      );
    }
  }
// Short Syntax
// There is a new, shorter syntax you can use for declaring fragments. It looks like empty tags:
class ColumnsShortSyntax extends React.Component {
    render() {
      return (
        <>
          <td>Hello from</td>
          <td>short syntax</td>
        </>
      );
    }
  }
//   Keyed Fragments
//   Fragments declared with the explicit <React.Fragment> syntax may have keys. A use case for this is mapping a collection to an array of fragments — for example, to create a description list:
function Glossary(props) {
    console.log(props.items)
    return (
      <dl>
          
        {props.items.map(item => (
          // Without the `key`, React will fire a key warning
          <React.Fragment key={item.id}>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
          </React.Fragment>
        ))}
      </dl>
    );
  }
//   key is the only attribute that can be passed to Fragment. In the future, we may add support for additional attributes, such as event handlers.
  
  




