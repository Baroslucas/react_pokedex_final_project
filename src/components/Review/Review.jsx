export function Review({ review }) {
    return (
        <div>
            <p>{review.content}</p>
            <p>Posted by : {review.author}</p>
        </div>
    )
}