export type CarResponse = {
    brand: string;
    model: string;
    color: string;
    registrationNumber: string;
    modelYear: string;
    price: number;
    _links: {
        self: {
            href: string;
        },
        car: {
            href: string;
        },
        owner: {
            href: string;
        }
    };
}

export type Car = {
    brand: string;
    model: string;
    color: string;
    registrationNumber: string;
    modelYear: string;
    price: number;
}

export type CarEntry = {
    car: Car;
    url: string;
}