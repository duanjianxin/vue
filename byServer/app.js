var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var ejs = require("ejs");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
// 主页
var homeRouter = require("./routes/home");
// nav
var tabRouter = require("./routes/tab");
var categorysRouter = require("./routes/categorys");
// 商品列表
var productListRouter = require("./routes/productList");
//商品详情
var productsRouter = require("./routes/products");
// 省市区
var areasRouter = require("./routes/areas");
// 新品列表
var newproductRouter = require("./routes/newproduct");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.engine(".html", ejs.__express);
// app.set('view engine', 'jade');
app.set("view engine", "html");

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/home", homeRouter);
app.use("/api/tab", tabRouter);
app.use("/api/categorys", categorysRouter);
app.use("/api/productList", productListRouter);
app.use("/api/products", productsRouter);
app.use("/api/areas", areasRouter);
app.use("/api/newproduct", newproductRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
