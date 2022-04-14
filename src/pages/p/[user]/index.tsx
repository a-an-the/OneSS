import {useRouter} from 'next/router'

import Menu from "@/components/Menu/Menu";
import userList from "@/setting/userList";
import PrivateItemList from "@/components/ItemList/PrivateItemList";


export default function UserIndex() {
    const {user} = useRouter().query
    const userName = user as string

    return (
        <>
            <Menu userName={userName}/>

            <div className={'flex justify-center mb-14'}>
                <PrivateItemList user={user as string}/>
            </div>
        </>
    )
}
