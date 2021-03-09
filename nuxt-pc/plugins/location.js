import { getLocationAPI } from '~/api/index'

if (!localStorage.getItem('city')) {
    getLocationAPI().then(res => {
        console.log('getLocationAPI', res)
        let cityCode = "";
        let city = ""
        if (res.data.city) {
            city = res.data.city.slice(0, -1);
            if (/0000/.test(res.data.adcode)) {
                cityCode = res.data.adcode.slice(0, -3) + "100";
            } else {
                cityCode = res.data.adcode;
            }
            localStorage.setItem("province", res.data.province);
            localStorage.setItem("cityCode", cityCode);
            localStorage.setItem("city", city);
        } else {
            localStorage.setItem("cityCode", "330100");
            localStorage.setItem("city", "杭州");
        }
    })
}

