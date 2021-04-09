var obj = {
  "get": { //代码段名称
    "prefix": "get", //代码段前缀
    "body": [
      "this.\\$axios.get($2).then(({ data }) => {",
      "if(data.code==200){",
      "console.log(data)",
      "$3",
      "}",
      "})"
    ]
  },
}