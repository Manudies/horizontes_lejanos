import favoriteModel from "../../models/favoriteModel.js";
import tripController from "../trips/tripController.js";

const getAll = async (tripId) => {
    try {
        const favorites = await favoriteModel.find({ trip: tripId });
        await Promise.all(favorites.map(async (favorite) => {
            await favorite.populate({
                path: "users",
                select: { username: 1, email: 1, role: 1 }
            });
        }));
        return favorites;
    } catch (error) {
        console.error(error);
        return [];
    }
}

const getById = async (id) => {
    try {
        const favorite = await favoriteModel.findById(id);
        await favorite.populate({
            path: "users",
            select: { username: 1, email: 1, role: 1 }
        });
        return favorite;
    } catch (error) {
        console.error(error);
        return null;

    }
}
const getByProperty = async (property, value) => {
    try {
        const favorite = await favoriteModel.find({ [property]: value })
        return favorite;
    } catch (error) {
        return null;
    }
}
const create = async (data) => {
    try {
        const favorite = await favoriteModel.create(data);
        if (favorite) {
            await tripController.addfavorite(favorite.trip, favorite._id)
        }
        await favorite.populate({
            path: "users",
            select: { username: 1, email: 1, role: 1 }
        });
        return favorite;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const update = async (id, data) => {
    console.log("datatata", data)
    try {
        await favoriteModel.findByIdAndUpdate(id, data);

        const favorite = await favoriteModel.findById(id);
        await favorite.populate({
            path: "users",
            select: { username: 1, email: 1, role: 1 }
        });
        return favorite;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async (id) => {
    try {
        const favorite = await favoriteModel.findByIdAndDelete(id);
        await tripController.removefavorite(favorite.trip, favorite._id);
        return favorite;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const removeMany = async (ids) => {
    try {
        const favorites = await favoriteModel.deleteMany({ _id: { $in: ids } });
        return favorites;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const functions = {
    getAll,
    getById,
    getByProperty,
    create,
    update,
    remove,
    removeMany,
}

export default functions;