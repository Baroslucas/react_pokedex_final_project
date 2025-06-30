import s from './Review.module.css'

export function Review({ review }) {
    return (
        <div className={s.div}>
            <p className={s.reviewContent}>{review.content}</p>
            <p className={s.author}>Posted by : {review.author}</p>
        </div>
    )
}