import apiServices from "../ApiServices";

export async function postEmploye(values) {
  return apiServices.postData({
    url: "/Employee/create-employees",
    method: "POST",
    data: values,
  });
}
export async function getEmploye() {
    return apiServices.fetchData({
      url: "/Employee/get-employees",
      method: "GET",
    });
  }