import commonAPI from "./commonAPI"
import SERVER_URL from "./server_url"

export const addVideoAPI = async (video) => {
    return await commonAPI("POST",`${SERVER_URL}/allvideos`,video)
}

export const getAllVideoAPI = async () =>{
    return await commonAPI("GET",`${SERVER_URL}/allvideos`,"")
}

export const removeVideoAPI = async (videoId) =>{
    return await commonAPI("DELETE",`${SERVER_URL}/allvideos/${videoId}`,{})
}

export const saveHistoryAPI = async (video) => {
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

export const getVideoHistoryAPI = async () =>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

export const removeVideoHistoryAPI = async (videoId) =>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}

export const addCategoryAPI = async (categoryDetails) =>{
    return await commonAPI("POST",`${SERVER_URL}/allCategory`,categoryDetails)
}

export const getCategoryAPI = async () =>{
    return await commonAPI("GET",`${SERVER_URL}/allCategory`,"")
}

export const deleteCategoryAPI = async(catId) =>{
    return await commonAPI("DELETE",`${SERVER_URL}/allCategory/${catId}`,{})
}

export const getAVideoAPI = async (videoId) =>{
    return await commonAPI("GET",`${SERVER_URL}/allvideos/${videoId}`,"")
}

export const updateCategoryAPI = async(catId,categoryDetails) =>{
    return await commonAPI("PUT",`${SERVER_URL}/allCategory/${catId}`,categoryDetails)
}

export const getSingleCategoryAPI = async (categoryId) =>{
    return await commonAPI("GET",`${SERVER_URL}/allCategory/${categoryId}`,"")
}