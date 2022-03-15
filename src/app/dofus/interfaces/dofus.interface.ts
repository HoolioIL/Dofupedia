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
