import { ColorRing } from  'react-loader-spinner'

export const Loader = () => {
    return(
        <>
            <ColorRing
                height="30vh"
                width="30vw"
                ariaLabel="blocks-loading"
                colors={['#3f51b5', '#fcd703', '#3f51b5', '#fcd703', '#3f51b5']}
            />
        </>
    )
}