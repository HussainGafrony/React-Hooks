import { useData } from "./Context";
export function Profile() {
    const { user } = useData();
    return (

        <>
            {user.map((userObj: any, index: any) => (

                <p key={index} style={{ fontSize: 16, fontWeight: 500, paddingLeft: 15 }} >
                    uuid : {userObj.login.uuid}  ###  sha256 :  {userObj.login.sha256}
                    <br />
                    firstName : {userObj.name.first.toLowerCase()} ##  lastname :  {userObj.name.last}
                    <br />
                    date :   {userObj.registered.date} ## {userObj.phone}
                    <br />
                    age :   {userObj.dob.age}  ##  Country :   {userObj.location.country}

                </p>
            ))}
        </>
    );
};


<br />
export function SideBar() {
    const { Sorted, data, sortData } = useData();
    // if (!Sorted) return 'Data not sorted';
    return (
        <>
            {data.map((data: any, index: any) => (
                <div key={index} style={{ fontSize: 17, fontWeight:"bolder", paddingLeft: 15,paddingBottom:5 }}>
                {data.id} _ {data.name}
                </div>

            ))}

            <p style={{ fontSize: 16, fontWeight: 500, paddingLeft: 15 }} >
                <button onClick={() => {
                    sortData();
                  
                }}><h2>{Sorted ? 'Sorted By ID' : 'Sorted By Name'}</h2></button>
            </p>
            

        </>
    );
};

export function UpdateRules() {
    // const update = () =>{
    //     return UserData;
    // };
    // const { updateUser } = useData();
    return (
        <>
            {/* <button onClick={() => updateUser(update())}>Update User Rules</button> */}
        </>

    );
}
