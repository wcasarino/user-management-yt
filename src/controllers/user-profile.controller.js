import UserModel from '#Schemas/user.schema.js';

const userProfileController = async (req, res) => {
    const { id } = req;

    const existingUserById = await UserModel.findById(id).exec();
    if (!existingUserById) return res.status(401).send('Usuario no autorizado');

    const { _id, name, surname, email } = existingUserById;

    res.send({ _id, name, surname, email });
};

export default userProfileController;
