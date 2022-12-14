import emojiList from '../emojiList';
import {useEffect, useState} from 'react';

const Main = () => {
    const [list, setList] = useState(emojiList);
    const [keyword, setKeyword] = useState("");
    
    const typed = (e) => {
        const value = e.target.value;
        setKeyword(value);
    }

    useEffect(_ => {
        console.log(`Keywoed changed - ${keyword}`);
    }, [keyword]);

    return (
        <main>
            <h2>Main section</h2>
        
            <input type="text" placeholder="Filter 🔎" onKeyUp={typed} />
        
            <h3>Result for - {keyword} </h3>

            <hr />
            {list.map((singleEmoji, idx) => {
                return (
                    <p key={idx}>{singleEmoji.emoji} - {singleEmoji.description}</p>
                )
            })}
        </main>
    )
}

export default Main;