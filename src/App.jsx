import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

// function ncard(val) {
//   return (
//     <Card
//       imgsrc={val.imgsrc}
//       title={val.title}
//       sname={val.sname}
//       link={val.link}
//     />
//   );
// }

const App = () => (
  <>
    <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
    {Sdata.map((val, index) => {
      // FAT ARROW
      console.log(index); // used to print the indices of Sdata array.
      return (
        <Card
          key={val.id} //Each child in the list must have a unique "key" prop.
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}
  </>
);
export default App;
