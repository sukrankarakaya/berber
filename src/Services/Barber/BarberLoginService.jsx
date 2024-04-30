import apiServices from "../ApiServices";

export async function postBarber(values) {
  return apiServices.postData({
    url: "/api/Auth/login",
    method: "POST",
    data: values,
  });
}
// export async function getBarber() {
//     return apiServices.fetchData({
//       url: "/Barber/get-barbers",
//       method: "GET",
//     });
//   }