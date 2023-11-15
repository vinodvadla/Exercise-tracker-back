const app = require("./middlewares/middlewares");
app.listen(process.env.PORT, () => {
  console.log(`server running on ${process.env.PORT}`);
});
