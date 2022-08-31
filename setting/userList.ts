const userList: userListType = {
    users: ["ykl@sckl.eu.org",],
    nickname: {
        "ykl@sckl.eu.org": '🤝 分享功能测试',
    }
}
export default userList;

type userListType = {
    users: string[],
    nickname: {
        [userName: string]: string
    }
}

