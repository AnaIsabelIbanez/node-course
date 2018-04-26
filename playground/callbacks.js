const getUser = (id, callback) => {
    const user = {
      id,
      name: 'an'
    };
    callback(user);
};

getUser(39, (userObject) => {
  console.log(userObject);
});