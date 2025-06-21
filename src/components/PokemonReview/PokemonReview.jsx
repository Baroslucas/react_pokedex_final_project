import like from '../../assets/img/like.svg'
import { Review } from '../Review/Review'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import { fetchPokemonReview } from '../../api/pokemonApi'

export function PokemonReview() {

    const { id } = useParams()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetchPokemonReview(id)
            .then(setReviews)
    }, [id])

    return (
        <div>
            <div>
                <button>
                    <img 
                        src={like} 
                        alt="like button"
                        className='' 
                    />
                </button>
                <p>2</p>
            </div>
            <div>
                <h3>Review</h3>
                <input 
                    type="text"
                    placeholder='Add a review ...'
                />
                {reviews.map((review) => (
                    <Review 
                        key={review.id} 
                        review={review} 
                    />
                ))}
            </div>
        </div>
    )
}