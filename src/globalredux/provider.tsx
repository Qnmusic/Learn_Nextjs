"use client";

import { store } from '../globalredux/store'
import { Provider } from 'react-redux'

const Providers = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <Provider store={store}>
                {children}
            </Provider>
        </div>
    )
}


export default Providers;