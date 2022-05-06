import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'
import styles from './styles.module.scss'

interface SubscribeButtonProps {
    priceId: string

    /**
     * Locais onde podemos usar a chaves secretas 
     * getSeverSideProps(SSR)
     * getStaticProps (SSG)
     * API routes
     */
}
export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    const { data: session } = useSession();

    async function handleSubscribe() {
        if (!session) {
            signIn('github')
            return;
        }

        // criação da checkout session
        try {
            const response = await api.post('/subscribe') // o nome do arquivo sempre é o nome darota

            const { sessionId } = response.data;

            // redirecionar o usuario
            const stripe = await getStripeJs()

            await stripe.redirectToCheckout({ sessionId })
        } catch (err) {
            alert(err.message)
        }


    }

    return (
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={handleSubscribe}
        >
            Subscribe Now
        </button>
    )
}