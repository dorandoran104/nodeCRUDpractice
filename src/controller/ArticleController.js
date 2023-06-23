const express = require("express");
const router = express.Router();
const articleService = require("../service/ArticleService");

router.get("/", async (req, res) => {
  const result =  await articleService.service.list();
  res.render("article/list", {list : result});
});

router.get("/new",async (req,res)=>{
  res.render("article/new");
})

router.get("/:id",async (req,res)=>{
  const result = await articleService.service.get(req.params.id);
  res.render("article/get",{article : result})
})

router.get("/modify/:id",async (req,res)=>{
  const result = await articleService.service.get(req.params.id);
  res.render("article/modify",{article : result})
})

router.post("/new",async (req,res)=>{
  const result = await articleService.service.new(req.body);
  res.json(result);
})

router.delete("/:id", async (req,res)=>{
  const result = await articleService.service.delete(req.params.id);
  console.log(result);
  res.json(result);
})

router.put("/:id",async (req,res)=>{
  const result = await articleService.service.modify(req.body,req.params.id);
  console.log(result);
  res.json(result);
})
module.exports = router;