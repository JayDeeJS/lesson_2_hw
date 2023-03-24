import PhotoContent from "../components/PhotoContent"
import MainPage from "../pages/MainPage"
import PhotosPage from "../pages/PhotosPage"
import UnknownPage from "../pages/UnknownPage"

export const PATHS = {
    MAIN: '/',
    PHOTOS: '/photos',
    PHOTOID: '/photos/:id',
    UNKNOWN: '/*',
}

export const routesLayout = [
    {
        id: 1,
        path: PATHS.MAIN,
        element: <MainPage/>
    },
    {
        id: 2,
        path: PATHS.PHOTOS,
        element: <PhotosPage/>
    }
]

export const routesDefault = [
    {
        id: 3,
        path: PATHS.PHOTOID,
        element: <PhotoContent/>
    },
    {
        id: 4,
        path: PATHS.UNKNOWN,
        element: <UnknownPage/>
    }
]