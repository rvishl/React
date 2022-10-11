import emojiList from '../emojiList';
import {useEffect, useState} from 'react';
import EmojiContainer from './EmojiContainer';

const Main = () => {
    const [list, setList] = useState(emojiList);
    const [keyword, setKeyword] = useState("");
    
    const typed = (e) => {
        const value = e.target.value.toLowerCase();
        setKeyword(value);
    }

    useEffect(_ => {
        //Filter based on description, category, alases
        const filterList = emojiList.filter(singleEmoji => {
            if(singleEmoji.description.startsWith(keyword)) {
                return true;
            }

            if(singleEmoji.category.startsWith(keyword)) {
                return true;
            }

            if(singleEmoji.aliases.some(e => e.startsWith(keyword))) {
                return true;
            }

            return false;
        });

        setList(filterList);
    }, [keyword]);

    return (
        <main>
            <h2>Main section</h2>
        
            <input type="text" placeholder="Filter 🔎" onKeyUp={typed} />
        
            <h3>Result for - {keyword} </h3>

            <hr />
            {list.length === 0 ? (
                <p>No Emoji Found</p>
            ) : (
              
                <EmojiContainer list={list} />

            )}

        </main>
    )
}

export default Main;