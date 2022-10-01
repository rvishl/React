import emojiList from '../emojiList';
import {useState} from 'react';

const Main = () => {
    const [list, setList] = useState(emojiList);
    const [keyword, setKeyword] = useState("");
    
    const typed = (e) => {
        const value = e.target.value;
        setKeyword(value);
    }

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

// v i k a s h
// a b h i l a s h a
// vishwas raj