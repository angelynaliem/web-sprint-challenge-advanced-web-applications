import { axiosWithAuth } from "../util/axiosWithAuth";

export const fetchColors = () => {
    return axiosWithAuth()
    .post("/login", login)
    .then((res) => {
      console.log("Bubble Page TEST Res is: ", res)
      localStorage.setItem("token", res.data.payload)
      return res
    })
    .catch((err) => {
      console.log("Bubble Page TEST Err is: ", err)
      return err
    })
  }