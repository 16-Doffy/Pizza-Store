import React, { useEffect, useState } from "react";
import CardPizza from "../sections/CardPizza";
import { Pizza } from "../models/Pizza.model";
import CountPizza from "../sections/CountPizza";
import TextField from "../components/TextField";
import ButtonField from "../components/ButtonField";

const HomePage = () => {
  const [count, setCount] = useState(0); // Dùng để cập nhật pizzas
  const [counter, setCounter] = useState(0); // Dùng để đếm số lần nhấn "Increase"
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
useEffect (() => {
fetch(`https://668a837a2c68eaf3211d01c4.mockapi.io/laptop/product`)
.then(res => res.json ())
.then(({data}) => setPizzas(data));
},[])

  return (
    <> 
    <div
      style={{
        height: "calc(100vh - 309px)",
        padding: "4rem 4rem",
        overflow: "auto",
      }}
    > 
    <TextField placeholder="Enter Search" width="250px" />
      <div className="wrapper-card-items">
        {
        (pizzas || []).map((item, index) =>
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
          <ButtonField >
            Show more
          </ButtonField>
        </div>
  
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
