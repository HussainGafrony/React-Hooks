
export const DataType = ({ data, titleKey, bodyKey }) => (
    <>
        {data.map(item => (
            <ol key={item['id']}  >
                <li>  <h2>{item[titleKey]}</h2></li>
                <li>
                    <p>{item[bodyKey]}</p>
                </li>
            </ol>
        ))}
    </>
);
