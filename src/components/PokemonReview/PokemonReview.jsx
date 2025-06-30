import like from '/assets/img/like.svg'
import { Review } from '../Review/Review'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import { addReview, fetchPokemonReview, updateLike } from '../../api/pokemonApi'
import { usePokemons } from '../../context/PokemonContext'
import s from './PokemonReview.module.css'


//Div with pokemonImg / PokemonStats / Review
export function PokemonReview() {
    const { id } = useParams()
    const { pokemons } = usePokemons()

    const [reviews, setReviews] = useState([])
    const [newReview, setNewReview] = useState('')
    const [likes, setLikes] = useState(0)

    const pokemon = pokemons.find(p => p.id.toString() === id)

    useEffect(() => {
        if (pokemon) {
            setLikes(pokemon.like)
        }
    }, [pokemon])

    useEffect(() => {
        if (pokemon) {
            fetchPokemonReview(id).then(setReviews)
            setLikes(pokemon.like)
        }
    }, [id, pokemon])

    const handleSubmit = async () => {
        if (!newReview) return;

        await addReview({
            pokemonId: id,
            author: "Me",
            content: newReview,
        })

        const updatedReview = await fetchPokemonReview(id)
        setReviews(updatedReview)
        setNewReview('')
    }

    const handleLike = async () => {
        const likeIncrement = likes + 1
        await updateLike({ id, like: likeIncrement })
        setLikes(likeIncrement)
    }

    if (!pokemons || pokemons.length === 0) {
        return <p>Chargement des données Pokémon...</p>
    }

    if (!pokemon) {
        return <p>Pokémon introuvable</p>
    }

    return (
        <div className={s.mainDiv}>
            <div className={s.likeBtnDiv}>
                <button onClick={handleLike} className={s.likeBtn}>
                    <img src={like} alt="like button" className={s.likeImg}/>
                </button>
                <p className={s.likeNbr}>{likes}</p>
            </div>
            <div>
                <h3 className={s.title}>Reviews</h3>
                <input 
                    className={s.input}
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
                <div className={s.reviewDiv}>
                    {reviews.map((review) => (
                        <Review key={review.id} review={review} />
                
                    ))}
                </div>
            </div>
        </div>
    )
}
