export const ADD_USERINFO = `
mutation ADD_USER(
    $behance: String
    $description: String
    $facebook: String
    $github: String
    $linkedin: String
    $title: String
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
      user_id
    }
  }
`;
