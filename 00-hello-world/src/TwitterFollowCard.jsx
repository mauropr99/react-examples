import { useState } from "react";

export function TwitterFollowCard ({children, userName, formatUserName, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const imageSrc = `https://unavatar.io/${userName}`;
    const followTxt = isFollowing ? 'Following' : 'Follow';
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const clickFollowBtn = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="Avatar from component" src={imageSrc}></img>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={clickFollowBtn}>
                    <span className='tw-followCard-text'>{followTxt}</span>
                    <span className='tw-followCard-unfollow'>Unfollow</span>
                </button>
            </aside>
        </article>
    )
}