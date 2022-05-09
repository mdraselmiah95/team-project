const express = require("express");
const SSLCommerz = require("sslcommerz-nodejs");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.post("/payment", (req, res) => {
  const { total } = req.body;
  let settings = {
    isSandboxMode: true,
    store_id: "freel626ec40abfe63",
    store_passwd: "freel626ec40abfe63@ssl",
  };

  let sslcommerz = new SSLCommerz(settings);
  let post_body = {};
  post_body["total_amount"] = total.toString();
  post_body["currency"] = "BDT";
  post_body["tran_id"] = "12345";
  post_body["success_url"] =
    "https://freelancer-solutions.herokuapp.com/success";
  post_body["fail_url"] = "https://freelancer-solutions.herokuapp.com/fail";
  post_body["cancel_url"] = "https://freelancer-solutions.herokuapp.com/cancel";
  post_body["emi_option"] = 0;
  post_body["cus_name"] = "test";
  post_body["cus_email"] = "test@test.com";
  post_body["cus_phone"] = "01700000000";
  post_body["cus_add1"] = "customer address";
  post_body["cus_city"] = "Dhaka";
  post_body["cus_country"] = "Bangladesh";
  post_body["shipping_method"] = "NO";
  post_body["multi_card_name"] = "";
  post_body["num_of_item"] = 1;
  post_body["product_name"] = "Test";
  post_body["product_category"] = "Test Category";
  post_body["product_profile"] = "general";
  sslcommerz
    .init_transaction(post_body)
    .then((response) => {
      res.send(response.GatewayPageURL);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.post("/success", (req, res) => {
  res.redirect(301, "http://localhost:3000/success");
});

app.post("/fail", (req, res) => {
  res.redirect(301, "http://localhost:3000/fail");
});
app.post("/cancel", (req, res) => {
  res.redirect(301, "http://localhost:3000/cancel");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
