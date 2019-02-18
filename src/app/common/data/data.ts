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
        // address: 'Taras Shevchenko Boulevard 30, Kiev, 01030, Ukraine',
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
        address: 'kiev',
        phone:  445556555,
        weather: {
            title: 'title weather string',
            icon: 'string',
            water: -5,
            temperature: 5
        },
        social_info:{ 
            title: 'title social string',
            img: '../assets/img/b1.jpg',
            followers: 10,
            following: 20
        },
        type: 'Fishing'
    },
    {
        img: 'string',
        address: 'kiev',
        phone:  445556555,
        weather: {
            title: 'title weather string',
            icon: 'string',
            water: -5,
            temperature: 5
        },
        social_info:{ 
            title: 'title social string',
            img: 'string',
            followers: 10,
            following: 20
        },
        type: 'Fishing'
    },
    {
        img: 'string',
        address: 'kiev',
        phone:  445556555,
        weather: {
            title: 'title weather string',
            icon: 'string',
            water: -5,
            temperature: 5
        },
        social_info:{ 
            title: 'title social string',
            img: 'string',
            followers: 10,
            following: 20
        },
        type: 'Tour'
    },
    {
        img: 'string',
        address: 'kiev',
        phone:  445556555,
        weather: {
            title: 'title weather string',
            icon: 'string',
            water: -5,
            temperature: 5
        },
        social_info:{ 
            title: 'title social string',
            img: 'string',
            followers: 10,
            following: 20
        },
        type: 'Tour'
    }
];
export const data$: Observable<IData[]> = of(data)
    .pipe(delay(300)); 