const express = require("express");
const SSLCommerz = require("sslcommerz-nodejs");

const app = express();
const port = 5000;

app.post("/", (req, res) => {
  let settings = {
    isSandboxMode: true,
    store_id: "freel626ec40abfe63",
    store_passwd: "freel626ec40abfe63@ssl",
  };

  let sslcommerz = new SSLCommerz(settings);
  let post_body = {};
  post_body["total_amount"] = 100.26;
  post_body["currency"] = "BDT";
  post_body["tran_id"] = "12345";
  post_body["success_url"] = "your success url";
  post_body["fail_url"] = "your fail url";
  post_body["cancel_url"] = "your cancel url";
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
