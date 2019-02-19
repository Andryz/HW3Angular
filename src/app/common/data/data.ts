import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface IData {
    img: string;
    address: string;
    phone: number;   // дополнительно задание pipe для форматирования
    weather: {
       title: string;
       icon: string;
       water: number;
       temperature: number;
    },
    social_info:{ 
       title: string;
       img: string;
       followers: number;
       following: number;
    }, 
    type: string;
 }

export const data: IData[] =[
    {
        img: '../assets/img/hotel1.jpg',
        address: 'Hilton, Kiev, Ukraine',
        phone:  380671234567,
        weather: {
            title: 'Winter Kiev',
            icon: 'string',
            water: -5,
            temperature: 5
        },
        social_info:{ 
            title: 'nice text',
            img: '../assets/img/social_kiev.jpg',
            followers: 10,
            following: 20
        },
        type: 'Hotel'
    },
    {
        img: '../assets/img/hotel2.jpg',
        address: 'Bukovel, Ivano-Frankivsk, Ukraine',
        phone:  380631234567,
        weather: {
            title: 'Winter Carpathians',
            icon: 'string',
            water: -10,
            temperature: 0
        },
        social_info:{ 
            title: 'nice text',
            img: '../assets/img/social_buk.jpg',
            followers: 15,
            following: 30
        },
        type: 'Hotel'
    },
    {
        img: '../assets/img/1.jpg',
        address: 'XZ',
        phone:  380671267567,
        weather: {
            title: 'title Fishing',
            icon: 'string',
            water: -5,
            temperature: 5
        },
        social_info:{ 
            title: 'title social Fishing',
            img: '../assets/img/b1.jpg',
            followers: 20,
            following: 40
        },
        type: 'Fishing'
    },
    {
        img: '../assets/img/hotel1.jpg',
        address: 'Kek city',
        phone:  380631274567,
        weather: {
            title: 'title Fishing',
            icon: 'string',
            water: -10,
            temperature: 7
        },
        social_info:{ 
            title: 'title social Fishing',
            img: '../assets/img/social_kiev.jpg',
            followers: 30,
            following: 50
        },
        type: 'Fishing'
    },
    {
        img: '../assets/img/1.jpg',
        address: 'Lol city',
        phone:  380681256567,
        weather: {
            title: 'title weather Tour',
            icon: 'string',
            water: -5,
            temperature: 5
        },
        social_info:{ 
            title: 'title social Tour',
            img: '../assets/img/b1.jpg',
            followers: 40,
            following: 60
        },
        type: 'Tour'
    },
    {
        img: '../assets/img/hotel2.jpg',
        address: 'Kiev',
        phone:  380671004567,
        weather: {
            title: 'title weather Tour',
            icon: 'string',
            water: -5,
            temperature: 5
        },
        social_info:{ 
            title: 'title social Tour',
            img: '../assets/img/social_kiev.jpg',
            followers: 50,
            following: 70
        },
        type: 'Tour'
    }
];
export const data$: Observable<IData[]> = of(data)
    .pipe(delay(300)); 