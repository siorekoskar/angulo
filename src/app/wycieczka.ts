
export interface Wycieczka {
    nazwa: string;
    docelowyKraj: string;
    dataRozpoczecia: string;
    dataZakonczenia: string;
    cenaJednostkowa: number;
    maxIloscMiejsca: number;
    opisWycieczki: string;
    link: string;
    rezerwacje: number;
    waluta: string;
    id: number;
    photos: string[]
}

export const WYCIECZKI = [
    {
        nazwa: "Wycieczka1",
        docelowyKraj: "Niemcy",
        dataRozpoczecia: "dzis",
        dataZakonczenia: "jutro",
        cenaJednostkowa: 50,
        maxIloscMiejsca: 5,
        opisWycieczki: "Niemcy sa mega dobrym miejscem na techno",
        rezerwacje: 0,
        link: "https://s0.dziennik.pl/pliki/10562000/10562866-niemcy-900-600.jpg",
        waluta: 'EUR',
        id: 0,
        photos: [
            "https://cdn.flixbus.de/2018-10/header-germany.jpg",
            "https://www.znajkraj.pl/files/styles/i/public/drezno-saksonia-niemcy-saksonia-2019-szymon-nitka-6154.jpg"
        ]
    },
    {
        nazwa: "Wycieczka2",
        docelowyKraj: "Hiszpania",
        dataRozpoczecia: "jutro",
        dataZakonczenia: "pojutrze",
        cenaJednostkowa: 53,
        maxIloscMiejsca: 2,
        opisWycieczki: "Mega słaba wycieczka",
        rezerwacje: 0,
        link: "https://f4fcdn.eu/wp-content/uploads/2019/06/Hiszpania2000ST.jpg",
        waluta: 'PLN',
        id: 1,
        photos: ["https://f4fcdn.eu/wp-content/uploads/2019/06/Hiszpania2000ST.jpg"]
    },
    {
        nazwa: "Wycieczka3",
        docelowyKraj: "Anglia",
        dataRozpoczecia: "dzis",
        dataZakonczenia: "jutro",
        cenaJednostkowa: 12,
        maxIloscMiejsca: 27,
        opisWycieczki: "Mega dziwna wycieczka",
        rezerwacje: 0,
        link: "https://ocdn.eu/pulscms-transforms/1/e5kktkqTURBXy8zMjVlODRjZDQxN2E0NmViMzI3ZGE2ZTkxODk0MzI0Yi5qcGVnkpUDAADNCcXNBX-TBc0DUs0B3g",
        waluta: 'USD',
        id: 2,
        photos: ["https://ocdn.eu/pulscms-transforms/1/e5kktkqTURBXy8zMjVlODRjZDQxN2E0NmViMzI3ZGE2ZTkxODk0MzI0Yi5qcGVnkpUDAADNCcXNBX-TBc0DUs0B3g"]
    }
    ,
    {
        nazwa: "Wycieczka4",
        docelowyKraj: "Anglia",
        dataRozpoczecia: "dzis",
        dataZakonczenia: "jutro",
        cenaJednostkowa: 13,
        maxIloscMiejsca: 27,
        opisWycieczki: "Mega dziwna wycieczka",
        rezerwacje: 11,
        link: "https://www.yachting.com/getattachment/96e526f0-551a-43f3-8b28-5bea08f8cbbb/hiszpania.aspx?width=750",
        waluta: 'PLN',
        id: 3,
        photos: ["https://www.yachting.com/getattachment/96e526f0-551a-43f3-8b28-5bea08f8cbbb/hiszpania.aspx?width=750"]
    }
];
