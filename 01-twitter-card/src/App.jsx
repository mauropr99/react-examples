import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        id: 1,
        userName: 'react',
        name: 'React Official',
        isFollowing: true
    },
    {
        id: 2,
        userName: 'mauropr',
        name: 'Mauro Paredes Romero',
    },
    {
        id: 3,
        userName: 'twitter',
        name: 'Twitter Account',
        isFollowing: false
    }
]

export function App () {    
    const formatUserName = (userName) => `@${userName}`;

    return (
        <section className='App'>
            {
                users.map(user => {
                    const {id, userName, name, isFollowing} = user;
                    return (
                    <TwitterFollowCard 
                        key={id}
                        userName={userName}
                        formatUserName={formatUserName}
                        initialIsFollowing={isFollowing}
                    >
                        <h2>{name}</h2>
                    </TwitterFollowCard>
                   )
                })
            }
        </section>
    )
}