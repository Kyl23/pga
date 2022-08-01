import { FC, PropsWithChildren } from 'react'

const GlobalLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>{children}</div>
    )
}

export default GlobalLayout