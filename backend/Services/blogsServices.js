
let util = require('../Util/util');
let blog =require('../Dao/blogDao');
let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");

let authKey="$#$#$@#%loginsecret%$#%$^$%^";

// ****  getblogs  **** //
let getblogs = util.errHandler(async (req, res) => {
    try {
       let result=await blog.getAllBlog()
       res.send({ code: 200 , message: "Success",result:result })
    } catch (error) {
        res.send({ code: 401 , message: "Some error while getting data" })
    }
})

// ****  addblogs  **** //
let addblogs = util.errHandler(async (req, res) => {
    try {
        let creatria={ ... req.body}
        if (typeof req.files != "undefined" && req.files["image"]) {
            creatria.image=req.files['image'][0].filename
        }
        creatria.createdBy=req.user[0].id
       await blog.addblogs(creatria);
       res.send({ code: 200 , message: "Success" })
    } catch (error) {
        res.send({ code: 401 , message: "Some error while adding data" })
    }
})

// ****  login  **** //
const login = async (req, res) => {
    try {

      let criteria = { email: req.body.email }
      let user = await blog.checkUser(criteria);

      console.log("user",user)

      if(!user.length){
        console.log("user",user)
        res.send({ code:401,message: "user not Exist" });
      }else{
          let match = await bcrypt.compare(req.body.password, user[0].password);
          // console.log("match",match)
            if (match) {
              let result={};
              let token = jwt.sign({ user },authKey);
              result.token = token;
              result.id = user[0].id;
              console.log("result",result)
              res.send({ code: 200 , message: "Success",result:result })

            } else {
              res.send({ code:401,message: "invalid Password" });
            }
      }
    } catch (error) {
      res.send({ code: 401, message: error })
    }
  };


// ****  signUp  **** //
const signUp = util.errHandler(async (req, res) => {
 try {
    let result={};
        const checkemail = await blog.checkUser(req.body);
      if(!checkemail.length){
            let hashPassword = await bcrypt.hash(req.body.password, util.saltRounds())
                await blog.addUser({email:req.body.email,password:hashPassword,fName:req.body.fName})
                  let user = await blog.checkUser({email:req.body.email});
                  let token = jwt.sign({ user }, authKey);
                  result.token = token;
                  result.id = user[0].id;
                  res.send({ code: 200 , message: "Success",result:result })
        } else {
            res.send({ code:401, message:"user already exist" });
        }
     } catch (error) {
        res.send({ code: 401, message: error })
    }
});


// ****  addCategory  **** //
const addCategory = util.errHandler(async (req, res) => {
    try {
       const checkName = await blog.checkCategoryName({name:req.body.name});
         if(!checkName.length){
                   await blog.addCategory({name:req.body.name})
                   res.send({ code: 200 , message: "Success"})
           } else {
               res.send({ code:401, message:"catgeory name already exist" });
           }
        } catch (error) {
           res.send({ code: 401, message: error })
       }
   });

// ****  getCategory  **** //
const getCategory = util.errHandler(async (req, res) => {
    try {
        const checkName = await blog.getCategory();
         if(checkName.length){
                   res.send({ code: 200 , message: "Success",result:checkName})
           } else {
               res.send({ code:401, message:"NO category exist" });
           }
        } catch (error) {
           res.send({ code: 401, message: error })
       }
   });

module.exports = {
    getCategory,
    addCategory,
    signUp,
    login,
    getblogs,
    addblogs,
};
