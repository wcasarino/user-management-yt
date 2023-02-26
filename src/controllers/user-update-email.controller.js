import UserModel from '#Schemas/user.schema.js';
import { compare } from 'bcrypt';

const userUpdateEmailController = async (req, res) => {
    const { id } = req;
    const { email, password } = req.body;

    const existingUserById = await UserModel.findById(id).exec();
    if (!existingUserById) return res.status(401).send('Usuario no autorizado');

    const checkPassword = await compare(password, existingUserById.password);
    if (!checkPassword) return res.status(401).send('Credenciales incorrectas');

    existingUserById.email = email;
    await existingUserById.save();

    res.send('Usuario actualizado');
};

export default userUpdateEmailController;
