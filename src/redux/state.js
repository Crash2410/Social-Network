let state = {
    profilePage: {
        posts: [{
                id: 1,
                message: 'Hi, how are you?',
                countLikes: 15
            },
            {
                id: 2,
                message: "It's my first message",
                countLikes: 25
            },
            {
                id: 3,
                message: "Bye, my freon",
                countLikes: 2
            }
        ]
    },
    dialogsPage: {

        dialogs: [{
                id: 1,
                name: 'Dimych',
                img: 'https://cdn1.flamp.ru/63e1cadaded672c1ee9226f22b52d605.jpg'
            },
            {
                id: 2,
                name: 'Andre',
                img: 'https://cdn1.flamp.ru/63e1cadaded672c1ee9226f22b52d605.jpg'
            },
            {
                id: 3,
                name: 'Sasha',
                img: 'https://cdn1.flamp.ru/63e1cadaded672c1ee9226f22b52d605.jpg'
            },
            {
                id: 4,
                name: 'Artem',
                img: 'https://cdn1.flamp.ru/63e1cadaded672c1ee9226f22b52d605.jpg'
            }
        ],
        messages: [{
                id: 1,
                message: 'Hi'
            },
            {
                id: 2,
                message: 'Hello'
            },
            {
                id: 3,
                message: 'How are you?'
            },
            {
                id: 4,
                message: 'Bye)'
            }
        ]
    },
    sidebar: {
        friends: [{
                id: 1,
                name: 'Dima',
                img: 'https://cdn1.flamp.ru/63e1cadaded672c1ee9226f22b52d605.jpg'
            },
            {
                id: 2,
                name: 'Artem',
                img: 'https://og.ru/sites/default/files/uploads/news/206_82.jpg'
            },
            {
                id: 3,
                name: 'Kate',
                img: 'http://www.temaufa.ru/media/news/76/8076/976d0532dd195ae16825db997efb9748.jpg'
            }
        ]
    }

}

export default state;