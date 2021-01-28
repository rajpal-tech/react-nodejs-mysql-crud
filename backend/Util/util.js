const errHandler = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(err => {
        console.log(err)
        // res.send({ "message": "something went wrong" })
      });
  };


  let saltRounds = _ => {
    const saltRounds = 10
    return saltRounds
  }


module.exports = {
  errHandler: errHandler,
  saltRounds:saltRounds
};