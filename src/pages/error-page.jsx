'use strict'

import { useRouteError } from 'react-router-dom'
import styles from '@styles/Error.module.css'

export function ErrorPage() {
    const error = useRouteError()
    return (
        <div className={styles.ErrorPage}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}
