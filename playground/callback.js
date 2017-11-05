var getUser = (id,callback) => {
var user = {
  id:id,
  name:'vikki'
};
callback(user);
}

getUser(25,(user) => {
  console.log(user);
}
