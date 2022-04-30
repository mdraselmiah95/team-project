export const ADD_USERINFO = `
mutation ADD_USER(
    $behance: String
    $description: String
    $facebook: String
    $github: String
    $linkedin: String
    $title: String
    $image : String
    $user_id: uuid!
  ) {
    insert_userInfo_one(
      object: {
        behance: $behance
        description: $description
        facebook: $facebook
        github: $github
        linkedin: $linkedin
        title: $title
        image : $image
        user_id: $user_id
      }
    ) {
      behance
      description
      facebook
      github
      id
      linkedin
      title
      image
      user_id
    }
  }
`;

export const ADD_PRODUCT = `
mutation ADD_PRODUCT($image :String!, $title:String!, $description :String!, $user_id :uuid!, $price:Int!) {
  insert_products_one(object: {image: $image, title: $title, description: $description, price: $price, user_id: $user_id}) {
    base64
    category
    courseOverview
    creator
    description
    descriptionTow
    id
    image
    language
    price
    star
    starCount
    students
    subtitle
    title
    user_id
    wholePrice
  }
}`;
