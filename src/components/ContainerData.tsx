import React from 'react';

export interface ContainerDataItemInterface {
    item?: object
    id?: number
    title?: string
}

export interface ContainerDataInterface {
    data?: any
    array?: boolean
    onClick?: (e: any) => void
}

const ContainerData = (data: ContainerDataInterface) => {
    // console.log('data : ', data.data)
    // console.log('data.array :', data.array)
    const {onClick} = data;

    return (
        <div>
            {!data.array ? (
                data.data.map((item: ContainerDataItemInterface, index: any) => {
                    // console.log('index :', index)

                    console.log('data.onClick : ', onClick)

                    if (index < 8) {
                        return (
                            <ul key={item.id}>
                                <li>
                                    <div>{item.title}</div>
                                    <button onClick={() => onClick ? onClick(100) : null}>More info - {item.id}</button>
                                </li>
                            </ul>
                        )
                    }

                    return null
                })
            ) : (
                <ul>
                    <li>
                        <div>{data.data.title}</div>
                        {/*<button onClick={data.onClick}>back</button>*/}
                    </li>
                </ul>
            )}
        </div>
    )
};

export default ContainerData;
