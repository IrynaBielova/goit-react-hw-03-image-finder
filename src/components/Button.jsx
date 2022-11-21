export const Button = ({ onShowMore }) => {
    return(
        <>
            <Button type="submit" onClick={onShowMore}>
                <span >Load more</span>
            </Button>
        </>
    )
}