import like from '../../assets/img/like.svg'
import { Review } from '../Review/Review'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import { addReview, fetchPokemonReview, updateLike } from '../../api/pokemonApi'
import { usePokemons } from '../../context/PokemonContext'

export function PokemonReview() {

    const { id } = useParams()
    const [reviews, setReviews] = useState([])
    const [newReview, setNewReview] = useState('')

    const { pokemons } = usePokemons()
    const pokemon = pokemons.find((p) => p.id.toString() === id)

    const [likes, setLikes] = useState(pokemon.like)

    useEffect(() => {
        fetchPokemonReview(id)
            .then(setReviews)
    }, [id])

    const handleSubmit = async () => {
        if (!newReview) return;

        await addReview({
            pokemonId: (id),
            author: "Me",
            content: newReview,
        }) 

        const updatedReview = await fetchPokemonReview(id)
        setReviews(updatedReview)
        setNewReview('')
    }
    
    const handleLike = async () => {
            const likeIncrement = likes + 1

            await updateLike({ id, like:likeIncrement })
            setLikes(likeIncrement)
        }
    console.log(pokemon)
    return (
        <div>
            <div>
                <button onClick={handleLike}>
                    <img 
                        src={like} 
                        alt="like button"
                        className='' 
                    />
                </button>
                <p>{likes}</p>
            </div>
            <div>
                <h3>Review</h3>
                <input 
                    type="text"
                    placeholder='Add a review ...'
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSubmit()
                        }
                    }}
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