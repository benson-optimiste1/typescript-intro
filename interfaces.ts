export interface IBird {
    wings: number
    noctunal: boolean
    family: string []
    flies: boolean
}

export interface IHaskilled {
    type: string
    weight: number
    color: string

}
export interface IKillerBirds extends IBird {
    edible: boolean
    hasKilled: IHaskilled[]
    phoneNumber: number
}
