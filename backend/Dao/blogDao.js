const knex = require("../db/knex");

const getAllBlog = async (criteria) => {
    try {
        let responce=await knex("blogs as b")
                    .join("category as c", "b.categoryId", "c.catId")
                    .join("users as u", "u.id", "b.createdBy")
                    .where('b.isActive','1')
                    .select("b.*","c.cateName","u.fName")


    for (index = 0; index < responce.length; index++) {
        responce[index].image = "localhost:5656/"+responce[index].image;
    }

        return responce;
    } catch (e) {
        return Promise.reject(e.toString());
    }
}

const addblogs = async (criteria) => {
    try {
        await knex("blogs").insert({
            title: criteria.title,
            image: criteria.image,
            description: criteria.description,
            categoryId: criteria.categoryId,
            createdBy: criteria.createdBy,
          });

    } catch (e) {
        return Promise.reject(e.toString());
    }
}

const checkUser = async (criteria) => {
    const { email } = criteria
    try {
         const user = await knex('users').where('email',email).where('isActive','1')
        return user;
    } catch (e) {
        return Promise.reject(e.toString());
    }
}

const addUser = async (criteria) => {
    try {
        await knex("users").insert({
            email: criteria.email,
            password: criteria.password,
            fName: criteria.fName
          });

    } catch (e) {
        return Promise.reject(e.toString());
    }
}

const checkCategoryName = async (criteria) => {
    const { name } = criteria
    try {
         const checkData = await knex('category').where('cateName',name).where('isActive','1')
        return checkData;
    } catch (e) {
        return Promise.reject(e.toString());
    }
}

const addCategory = async (criteria) => {
    try {
        await knex("category").insert({cateName: criteria.name});
    } catch (e) {
        return Promise.reject(e.toString());
    }
}

const getCategory = async () => {
    try {
        const data = await knex('category').where('isActive','1')
        return data;
    } catch (e) {
        return Promise.reject(e.toString());
    }
}

module.exports = {
    getCategory,
    addCategory,
    checkCategoryName,
    addUser,
    checkUser,
    addblogs,
    getAllBlog
}