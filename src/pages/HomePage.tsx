import React, { useEffect, useMemo, useState } from "react";
import CardPizza from "../sections/CardPizza";
import { Pizza } from "../models/Pizza.model";
import TextField from "../components/TextField";
import ButtonField from "../components/ButtonField";
import SpinnerLoad from "../components/SpinnerLoad";

const HomePage = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [ searchText, setSearchText] = useState<string>('');
  const handleShowMore = () => {
    setIsLoading(true);
    setPage(page => page + 1);
  }
  
  const handleSearchText = (value: string) => {
    setSearchText(value)
  }
  useEffect(() => {
    
    fetch(`https://668a837a2c68eaf3211d01c4.mockapi.io/laptop/product?page=${page}`)
      .then(res => res.json())
      .then((data) => {
        setIsLoading(false);
        setPizzas([...pizzas, ...data]);
      })
  }, [page]);
  
  const searchValues = useMemo (() => {
    return pizzas.filter(item => item.productName?.toUpperCase().indexOf(searchText.toUpperCase()) !== -1);
    },[searchText]);

  return (
    <> 
    <div
      style={{
        height: "calc(100vh - 309px)",
        padding: "4rem 4rem",
        overflow: "auto",
      }}
    > 
    {
      !pizzas.length && (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center',height:'100%'}}>
          <SpinnerLoad />
        </div>
      )
    }
   {
    pizzas.length > 0 && (
      <div>
      <TextField placeholder="Enter Search" width="250px" onChange={handleSearchText}/>
        <div className="wrapper-card-items">
          {
          (searchText ? searchValues : pizzas || []).map((item, index) =>
            <CardPizza
              key={index}
              id={item.id}
              productName={item.productName}
              description={item.description}
            />
          )
          }
        </div>
  
        <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}>
           <ButtonField loading={isLoading} onClick={handleShowMore}>
             Show more
              </ButtonField>
          </div>
          </div>
    )
   }
    </div>
    </>
  )
};

export default HomePage;





// import React, { useEffect, useMemo, useRef, useState } from "react";
// import CardPizza from "../sections/CardPizza";
// import { Pizza } from "../models/Pizza.model";
// import ButtonField from "../components/ButtonField";
// import TextField from "../components/TextField";

// const HomePage = () => {
//   const [pizzas, setPizzas] = useState<Pizza[]>([]);
//   const [count, setCount] = useState(0); // Dùng để cập nhật pizzas
//   const [page, setPage] = useState<number>(1);
//   const [isLoading, setIsLoading] = useState(false);
//   const pageRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     setIsLoading(true);
//     fetch("https://668a837a2c68eaf3211d01c4.mockapi.io/laptop/product")
//       .then((res) => res.json())
//       .then((data) => {
//         setTimeout(() => {
//           setPizzas((prevPizzas) => [...prevPizzas, ...data]);
//           setIsLoading(false);
//         }, 2000);
//       });
//   }, [page]);

//   const tinhTong = useMemo(() => {
//     return count + 1;
//   }, [count]);
//   return (
//     <div
//       style={{
//         height: "calc(100vh - 309px)",
//         padding: "4rem 4rem",
//         overflow: "auto",
//       }}
//     >
//       <TextField placeholder="Enter search" width="250px" />
//       <div className="wrapper-card-items">
//         {pizzas.map((item) => (
//           <CardPizza
//             key={item.id}
//             id={item.id}
//             productName={item.productName}
//             description={item.description}
//           />
//         ))}
//         <div ref={pageRef}>DOffy hello</div>
//         <div
//           style={{ display: "flex", width: "100%", justifyContent: "center" }}
//         >
//           <ButtonField
//             loading={isLoading}
//             onClick={() => {
//               if (pageRef.current) {
//                 pageRef.current.style.color = "red";
//               }
//             }}
//           >
//             Show more
//           </ButtonField>
//         </div>
//         {tinhTong}

//         <button onClick={() => setCount(count + 1)}>Increase</button>
//         {count}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
