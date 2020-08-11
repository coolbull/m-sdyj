/**
 * 这是简便的时间转换工具库。
 ** 使用方法
 * import datetransform  from "common/datetransform.js";
 * 引入后可通过datetransform.gethour(timestamp)等方法直接使用
 *
 * 写了几个常见的方法 ：   
 * toTformat(times)   // 将日期转换成含T的格式不含秒  如2018-08-08T11:11
 * tonormalformat(times) // 将日期转换成标准格式
 * tostamp(times)日期转为时间戳   
 * tozerostamp(times)日期转时间戳(零点)
 * getall(timestamp)时间戳转日期(包含年月日时分秒)
 * getday(timestamp)时间戳转日期(包含年月日)
 * gethour(timestamp)时间戳转日期(包含时分秒)
 * getnow(type)时间戳转日期
 * // 当前日期/时分秒
 * type为"day"时返回当天日期(包含年月日) 
 * type为"hour"时返回当天时间(包含时分秒) 
 * type为空时返回当天日期加时间(包含年月日时分秒)
 * 
**/
    let datetransform = {
          // 将日期转换成含T的格式不含秒
    toTformat(times){
        var time=times
        if(time){
        var date = new Date(time);
        let Y = date.getFullYear() + '-'
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
        let h = (date.getHours() < 10 ? '0' +  date.getHours() :  date.getHours())  + ':'
        let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) 
        let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
        return Y + M + D + "T" + h + m
    }else{
        return ""
    }
    },
        // 将日期转换成标准格式
    tonormalformat(times){
        var time=times
        if(time){
        var date = new Date(time);
        let Y = date.getFullYear() + '-'
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
        let h = (date.getHours() < 10 ? '0' +  date.getHours() :  date.getHours())  + ':'
        let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
        let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
        return Y + M + D + " " + h + m + s
    }else{
        return ""
    }
    },
     // 日期转时间戳
    tostamp(times) {
        if(times){
        let time = new Date(times)
        return time.getTime()
        }else{
            return ""
        }
    },
    // 日期转时间戳(零点)
    tozerostamp(times) {
        if(times){
        let time = new Date(times + " 00:00:00")
        return time.getTime()
        }else{
            return ""
        } 
        
    },
    // 时间戳转日期(包含年月日时分秒)
    getall(timestamp) {
        if(timestamp){
        let date = new Date(timestamp*1000);
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
        let h = (date.getHours() < 10 ? '0' +  date.getHours() :  date.getHours())  + ':'
        let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
        let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        return Y + M + D + " " + h + m + s
    }else{
        return ""
    } 
    
    },
     // 时间戳转日期(包含年月日)
    getday(timestamp) {
        if(timestamp){
        let date = new Date(parseInt(timestamp))    
        let Y = date.getFullYear() + '-'
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
        let h = (date.getHours() < 10 ? '0' +  date.getHours() :  date.getHours())  + ':'
        let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
        let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        return Y + M + D
    }else{
        return ""
    } 
    },
     // 时间戳转日期(包含时分秒)
    gethour(timestamp) {
        if(timestamp){
        let date = new Date(parseInt(timestamp))
        let Y = date.getFullYear() + '-'
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
        let h = (date.getHours() < 10 ? '0' +  date.getHours() :  date.getHours())  + ':'
        let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
        let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
        return h + m + s; 
    }else{
            return ""
        } 
    },
    // 日期/时分秒，参数为空时返回当前日期时间 type为"day"时返回当天日期 type为"hour"时返回当天时间 type空时返回当天日期加时间
    getnow(type) {
        let date = new Date()
        let Y = date.getFullYear() + '-'
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
        let h = (date.getHours() < 10 ? '0' +  date.getHours() :  date.getHours())  + ':'
        let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
        let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        if (type == "day") {
            return Y + M + D
        } else if (type == "hour") {
            return h + m + s;
        } else {
            return Y + M + D + " " + h + m + s
        }
    },
}

export default datetransform