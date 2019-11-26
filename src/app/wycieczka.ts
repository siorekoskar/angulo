
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
}

export const WYCIECZKI = [
    {
        nazwa: "Wycieczka1",
        docelowyKraj: "Niemcy",
        dataRozpoczecia: "dzis",
        dataZakonczenia: "jutro",
        cenaJednostkowa: 50,
        maxIloscMiejsca: 5,
        opisWycieczki: "Mega dobra wycieczka",
        rezerwacje: 0,
        link: "http://tutorialspark.com/AngularJS/Angular.png",
        waluta: 'EUR',
        id: 1
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
        link: "http://www.maximkrynica.pl/Wycieczka-objazdowa-Inne-Inne-Bawarskie-sanktuaria-zamki-9-dni,2647,520,1,sph.jpg",
        waluta: 'PLN',
        id: 2
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
        link: "http://www.maximkrynica.pl/Wycieczka-objazdowa-Inne-Inne-Bawarskie-sanktuaria-zamki-9-dni,2647,520,1,sph.jpg",
        waluta: 'USD',
        id: 3
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
        link: "http://www.maximkrynica.pl/Wycieczka-objazdowa-Inne-Inne-Bawarskie-sanktuaria-zamki-9-dni,2647,520,1,sph.jpg",
        waluta: 'PLN',
        id: 4
    }
];
