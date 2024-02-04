import axios from "axios";
export const getServices = async () => {
  return (await axios.get("http://localhost:5000/api/v1/services")).data;
};
// export const getServices = async () => {
//   const res = await fetch("http://localhost:5000/api/v1/fservices").then((res) =>
//     res.json()
//   );
//   if (!res.success) {
//     throw Error("Something went wrong!");
//   }
//   return res;
// };
