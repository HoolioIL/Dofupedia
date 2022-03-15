export interface DofusChamp {
    _id:         number;
    ankamaId:    number;
    name:        string;
    level:       null;
    type:        Type;
    url:         string;
    description: string;
    roles:       string[];
    spells:      Spell[];
    maleImg:     string;
    femaleImg:   string;
}

export interface Spell {
    name:     string;
    variant?: string;
}

export enum Type {
    Classe = "classe",
}


export interface Item {
    _id:         number;
    ankamaId:    number;
    name:        string;
    level:       number;
    type:        Type;
    imgUrl:      string;
    url:         string;
    description: string;
    statistics:  { [key: string]: Statistic }[];
    conditions?: string[];
    recipe:      { [key: string]: Recipe }[];
    setId:       number;
}

export interface Recipe {
    ankamaId: number;
    url:      string;
    imgUrl:   string;
    type:     string;
    level:    number;
    quantity: number;
}

export interface Statistic {
    min: number;
    max: number | null;
}


