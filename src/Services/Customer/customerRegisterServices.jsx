import apiServices from "../ApiServices";

export async function postCustomer(values) {
  return apiServices.postData({
    url: "/Customer/create-customer",
    method: "POST",
    data: values,
  });
}
export async function getCustomer() {
    return apiServices.fetchData({
      url: "/Customer/get-customers",
      method: "GET",
    });
  }