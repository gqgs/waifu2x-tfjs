import{u as i,P as n}from"./vendor.c2c7b74f.js";const e={};i({testCallback(i){i(.5)},async init(i){null===i||i in e||(e[i]=new n(i))},async predict(i,n){return null===i?n:(i in e||await this.init(i),await e[i].predict(n,-1===i.indexOf("scale2.0x_model.")))},async listenToModelDownloadProgress(i,n=(i=>{})){null!==i&&(i in e||await this.init(i),e[i].listenToModelDownloadProgress(n))},async listenToModelPredictProgress(i,n=(i=>{})){null!==i&&(i in e||await this.init(i),e[i].listenToModelPredictProgress(n))},async destroy(i){if(null===i||!(i in e))return image;e[i].destroy(),delete e[id]}});