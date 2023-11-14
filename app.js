const app = require("./middlewares/middlewares");
app.listen(process.env.PORT || 5000, () => {
  console.log(`server running on ${process.env.PORT}`);
});
