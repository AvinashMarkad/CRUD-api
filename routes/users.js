import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

const users = [];

router.get('/', (req, res) => {
    res.send(users);
});


router.post('/', (req, res) => {
    console.log("POST ROUTE REACHED");
    console.log(req.body);
    // res.send("POST ROUTE REACHED");
    const user = req.body;

    // const userId = uuidv4();
    // const userWithId ={...user,id:userId};
    // users.push(userWithId);

    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database!`);
});




export default router;