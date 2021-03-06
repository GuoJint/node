define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./api/main.js",
    "group": "E:\\MyProject\\node\\src\\demo\\api\\main.js",
    "groupTitle": "E:\\MyProject\\node\\src\\demo\\api\\main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/food/del",
    "title": "id删除",
    "name": "id删除",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ff",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/file/upload",
    "title": "上传图片",
    "name": "上传图片",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pagesize",
            "description": "<p>每页数据条数.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页数.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ff",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/fileRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/update",
    "title": "修改",
    "name": "修改",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>菜名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>价格.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>描述.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typename",
            "description": "<p>类型名称.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typeid",
            "description": "<p>类型id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>菜图.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ff",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/findKeyWord",
    "title": "关键字查询",
    "name": "关键字查询",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kw",
            "description": "<p>关键字.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ff",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/findType",
    "title": "分类查询",
    "name": "分类查询",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typeid",
            "description": "<p>类型id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ff",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/getInfoByPage",
    "title": "分页",
    "name": "分页",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pagesize",
            "description": "<p>每页数据条数.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页数.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ff",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/reg",
    "title": "添加菜品",
    "name": "添加菜品",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>菜名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>价格.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>描述.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typename",
            "description": "<p>类型名称.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typeid",
            "description": "<p>类型id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>菜图.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ff",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/user/getMailCode",
    "title": "发送邮箱验证码",
    "name": "getMai",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>邮箱.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ff",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "用户登录",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "psw",
            "description": "<p>用户密码.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ff",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/reg",
    "title": "用户注册",
    "name": "用户注册",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "psw",
            "description": "<p>用户密码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>验证码.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ff",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/userRouter.js",
    "groupTitle": "User"
  }
] });
