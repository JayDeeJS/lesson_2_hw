import { $api } from "./requester"

const ENDPOINTS = {
    PHOTOS: '/photos',
}

export const fetchPhotos = async () => {
    try {
        const response = await $api.get(ENDPOINTS.PHOTOS)
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export const fetchPhotosById = async (id) => {
    try {
        const response = await $api.get(`${ENDPOINTS.PHOTOS}/${id}`)
        return response.data
    } catch (error) {
        console.error(error);
    }
}