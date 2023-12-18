/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { DataType } from './dataType';
export default function State () {
    const [query, setQuery] = useState('posts');
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [title, setTitle] = useState('');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${query}`);
        const fetchedData = await response.json();
        setData(fetchedData);
        setTitle(query);
        setIsLoading(false);
    };


    useEffect(() => {
        fetchData();
    }, [query]);

    const newData = [
        { query: 'posts', titleKey: 'title', bodyKey: 'body' },
        { query: 'comments', titleKey: 'name', bodyKey: 'body' },
        { query: 'albums', titleKey: 'id', bodyKey: 'title' },
        { query: 'todos', titleKey: 'title', bodyKey: 'completed' }
    ];
    if (isLoading) return <p>Loading data...</p>;

    return (
        <>
            <h1>The Data Selected: {title}</h1>
            <h1 className='clickable' onClick={() => setQuery('comments')}>Comments</h1>
            <h1 className='clickable' onClick={() => setQuery('todos')}>Todos</h1>
            <h1 className='clickable' onClick={() => setQuery('albums')}>Albums</h1>
            <h1 className='clickable' onClick={() => setQuery('posts')}>Posts</h1>
            {
                newData.map((item, index) => (

                    ((query === item.query) && <DataType key={index} data={data} titleKey={item.titleKey} bodyKey={item.bodyKey} />)
                ))}
        </>
    )
}
