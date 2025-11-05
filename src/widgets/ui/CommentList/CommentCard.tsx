function CommentCard({ comment }) {
    return (
        <>
            <h3>{comment.author}</h3>
            <p>{comment.createdAt}</p>
            <p>{comment.text}</p>
        </>
    )
}


export default CommentCard