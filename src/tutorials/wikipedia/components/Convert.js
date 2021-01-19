import React, {useEffect, useState} from 'react';
import axios from 'axios';

// https://translation.googleapis.com/language/translate/v2
// API KEY: AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
export const Convert = ({language, text}) => {
    const [translatedText, setTranslatedText] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        }
    }, [text]);



    // you can't make useEffect f() an async one
    useEffect(() => {
        const doTranslation = async () => {
            const response = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });

            setTranslatedText(response.data.data.translations[0].translatedText);
        };

        doTranslation();
    }, [language, debouncedText]);

    return (
        <div>
            <h1 className="ui header">{translatedText}</h1>
        </div>
    );
}
