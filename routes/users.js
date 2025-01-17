import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

let users = [];

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

router.get('/:id', (req, res) => {
    console.log(req.params);

    const { id } = req.params;

    const foundUser = users.find((user)=>user.id===id)

    res.send(foundUser);   
});

router.delete('/:id', (req, res) => { 
    const { id } = req.params;

    //jon 123
    //jonny 321

    //delete 123

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database.`);


});

export default router;