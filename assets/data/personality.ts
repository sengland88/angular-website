import { Personality } from "src/models/personality";

export const personality: Personality[] = [
    {
        title: 'StrengthsFinder',
        thumbnail: 'assets/images/strength.png',
        data: [
            {
                name: 'Restorative',
                description: 'loves to solve problems and enjoys analyzing a problem and finding a solution'
            },
            {
                name: 'Individualization',
                description: 'sees each person as one of kind and is intrigued by the unique abilities within each person'
            },
            {
                name: 'Communication',
                description: 'enjoys expressing himself in any form and is not afraid to create new and unique ways to do so'
            },
            {
                name: 'Connectedness',
                description: 'believes everything happens for a reason and possesses the unique ability to "connect the dots" between what is happening here and now with deep personal meaning'
            },
            {
                name: 'Responsibility',
                description: 'makes commitments that aligns with and reflects personal values'
            }
        ],
        url: 'https://drive.google.com/open?id=1H5hOKC-WapO6EGyaNjdgUT0nPj6MoJk5'
    },
    {
        title: 'FourSight',
        thumbnail: 'assets/images/sight.png',
        data: [
            {
                name: 'Ideator',
                description: 'uses imagination to generate out-of-the-box ideas'
            }
        ],
        url: 'https://drive.google.com/open?id=18pgjWUjo0ofrHDp32ZYxtP1Debm1PCTg'
    },
    {
        title: 'StandOut',
        thumbnail: 'assets/images/standout.png',
        data: [
            {
                name: 'Teacher',
                description: 'thrilled by the potential in each person and enjoys discovering various ways to unleash it'
            },
            {
                name: 'Provider',
                description: "able to sense people's feelings and is compelled to give each person's feelings a voice"
            }
        ],
        url: 'https://drive.google.com/open?id=1_ZXCh-3EYzKo9KfH8it-XtYe7d-YEptv'
    },

]