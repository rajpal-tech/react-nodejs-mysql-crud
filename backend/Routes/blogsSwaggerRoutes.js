
// 1
/**
 * @swagger
 * /api/blogs/login:
 *   post:
 *     tags:
 *      - API LIST
 *     name: login
 *     summary: login to the admin  -[1]
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: Request
 *         description: Request sample {"email":"admin@gmail.com","password":"123456"}
 *         in: body
 *         required: true
 *         type: object
 *     responses:
*       200:
*         description: Login successfully
*         schema:
*           type: object
*           properties:
*             token:
*               type: string
*               description: auth token.
*             id:
*               type: integer
*               duserIdescription: id
*       401:
*         description: Error.
 */


// 2
/**
 * @swagger
 * /api/blogs/signUp:
 *   post:
 *     tags:
 *      - API LIST
 *     name: signUp
 *     summary: signUp  -[2]
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: Request
 *         description: Request sample {"email":"1admin@gmail.com","password":"123456","fName":"rajpal"}
 *         in: body
 *         required: true
 *         type: object
 *     responses:
*       200:
*         description: Success.
*       401:
*         description: Email already exist ..
 */


// 3
/**
* @swagger
* /api/blogs/getblogs:
*   get:
*     tags:
*       - API LIST
*     name: getblogs
*     summary: Getting a blogs list  -[3]
*     consumes:
*       - application/json
*     responses:
*       200:
*         description: Success
*         schema:
*           type: object
*           properties:
*             id:
*               type: integer
*               description: id.
*             title:
*               type: string
*               duserIdescription: title
*             description:
*               type: string
*               description: description.
*             image:
*               type: string
*               description: image.
*             categoryId:
*               type: string
*               description: categoryId.
*             isActive:
*               type: string
*               description: isActive.
*             createdby:
*               type: string
*               description: createdby.
*       401:
*         description: Bad Request
*/

 // 4
/**
 * @swagger
 * /api/blogs/addblogs:
 *   post:
 *     tags:
 *      - API LIST
 *     name: addblogs
 *     summary: adding a blogs [passing authorization Header also]  -[4]
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: Enter title.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: image
 *         description: Choose blogs image
 *         in: formData
 *         required: true
 *         type: file
 *       - name: description
 *         description: Enter description.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: categoryId
 *         description: Choose categoryId.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
*       200:
*         description: blogs add successfully.
*       401:
*         description: Error
 */



// 5
/**
* @swagger
* /api/blogs/getCategory:
*   get:
*     tags:
*       - API LIST
*     name: getblogs
*     summary: Getting a blogs list  [passing authorization Header also] -[5]
*     consumes:
*       - application/json
*     responses:
*       200:
*         description: Success
*         schema:
*           type: object
*           properties:
*             catId:
*               type: integer
*               description: catId.
*             cateName:
*               type: string
*               duserIdescription: cateName
*             isActive:
*               type: string
*               description: isActive.
*       401:
*         description: Bad Request
*/



// 6
/**
 * @swagger
 * /api/blogs/addCategory:
 *   post:
 *     tags:
 *      - API LIST
 *     name: addCategory
 *     summary: addCategory  -[6]
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: Request
 *         description: Request sample {"name":"AWS"}
 *         in: body
 *         required: true
 *         type: object
 *     responses:
*       200:
*         description: Success.
*       401:
*         description: catgeory name already exist
 */
