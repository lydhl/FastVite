//我要用到的一些接口
import service from "./index";
 
// 登录接口
export function login(data) {//接口ILoginData接口的变量名
    return service({
        url: "/login",
        method: "POST",
        data
    })
}
 